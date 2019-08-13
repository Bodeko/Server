<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Cart;
use App\User;
use Illuminate\Support\Facades\Auth;
use App\Repositories\CartRepository;
use App\Http\Requests\CartUpdateRequest;



class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    private $repository;

    public function __construct(CartRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index(Request $request)
    {
        $products = $this->repository->allProducts($request);
        return $products;
        // return view('cart.index', compact('products'));
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $product_id)
    {
        $result = $this->repository->update($product_id);
        return $result;
        // return redirect('/products/'.$product_id);
    }

    public function updateProductQuantity(CartUpdateRequest $request, $product_id)
    {
        $quantity = $request->validated();
        $this->repository->updateProductQuantity($quantity, $product_id);
        return redirect('/carts');
    }


    public function removeFromCart(Request $request, $product_id){
        $result = $this->repository->removeProductFromCart($product_id);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy()
    {
        $this->repository->destroy();
        return redirect('/carts');
    }


}
