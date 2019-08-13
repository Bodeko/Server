<?php

namespace App\Http\Controllers;

use App\Repositories\OrderRepository;
use Illuminate\Http\Request;
use App\Order;
use App\Address;
use App\Transformations\PlaceOrderFinalReportTransformation;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    private $repository;

    public function __construct(OrderRepository $repository){

        $this->repository = $repository;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $orders = $this->repository->all();
        return $orders;
        // return view('order.index', compact('orders'));
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
        // return $request['address_id'];
        return $this->repository->placeOrder($request['address_id']);
        // return view('order.success');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $order=$this->repository->find($id);

        $address = $this->repository->orderAddress($order);
        $products = $this->repository->orderProducts($order);
        return ['address'=>$address, 'products' => $products];
        // return view('order.show', compact('products', 'address'));
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
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }


    //this should be in cart..
    public function finalReport($id, PlaceOrderFinalReportTransformation $transform)
    {
        $address = Address::findOrFail($id);
        $user = Auth::user();
        $products = $user->cart->products;

        return $transform->transform($products, $address);
        // return view('order.finalReport', compact('address', 'products'));
    }

    public function buyNow(Request $request){
        $validatedData = $request->validate([
            'product_id' => 'required',
            'address_id' => 'required',
        ]);

        return $this->repository->buyNow($validatedData['product_id'], $validatedData['address_id']);
    }
}
