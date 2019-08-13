<?php

namespace App\Transformations;

class PlaceOrderFinalReportTransformation{

    public function transform($products, $address){
        // $products = [
        //     'title' => $products['title'],
        //     'cost' => $products->cost,
        //     'quantity' => $products->pivot->quantity
        // ];
        // $address = [
        //     'street' => $address->street,
        //     'city' => $address->city,
        //     'pincode' => $address->pincode,
        //     'state' => $address->state,
        //     'phone_number' => $address->phone_number
        // ];

        // write transormations here

        return ['products' => $products, 'address' => $address];
    }
}
