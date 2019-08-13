<?php

namespace App\Http\Controllers;
use App\User;

use Illuminate\Http\Request;

class PassportController extends Controller
{
    public function register(Request $request){
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed'
        ]);
        $validatedData['password'] = bcrypt($validatedData['password']);
        $user = User::create($validatedData);


        $token = $user->createToken('authToken')->accessToken;

        return response(['user' => $user, 'access_token'=> $token]);
    }


    public function login(Request $request)
    {
        $loginData = $request->validate([
            'email' => 'email|required',
            'password' => 'required'
        ]);

        if(!auth()->attempt($loginData))
        {
            return response(['message'=> 'Invalid Crediantials']);
        }
        $token = auth()->user()->createToken('authToken')->accessToken;

        return response(['user' => auth()->user(), 'access_token'=> $token]);
    }

    public function logout(Request $request){
        // $value = $request->bearerToken();
        // return compact('value');
        // $userTokens = $request->user();
        // return compact('userToken');
        $userTokens = $request->user()->token();
        // return response(['user'=> $userTokens]);
        // foreach($userTokens as $token) {
        //     $token->revoke();   
        // }
        $userTokens->revoke();


    }
}
