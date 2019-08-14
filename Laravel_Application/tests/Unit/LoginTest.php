<?php

namespace Tests\Unit;
use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class LoginTest extends TestCase
{
    // use RefreshDatabase;
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function testExample()
    {
        $response = $this->get('/home')->assertRedirect('/login');
        // $this->assertTrue(true);
    }

    public function test_authenticated_user_can_see_cart()
    {
        $this->actingAs(factory(User::class)->create())->get('/carts')->assertRedirect('/carts');
        // $response = $this->get('/home')->assertOk();
        // $this->get('/carts')->assertRedirect('/carts');
        // $this->assertTrue(true);

    }

    public function test_register_a_new_user()
    {
        $this->post("/register", [
            'name' => 'test',
            'email' => 'shivam112@gmail.com',
            // 'email_verified_at' => now(),
            'password' => 'qqqqqqqq',
            'password_confirmation' => 'qqqqqqqq',
            // 'remember_token' => NOW(),
        ])
        ->assertRedirect('/home');
        // ->assertOk();
    }

    public function test_user_can_log_in(){
        $this->post("/login", [
            'email' => "shivam@gmail.com",
            'password' => "qqqqqqqq"
        ])
        ->assertRedirect('/home');
    }
}
