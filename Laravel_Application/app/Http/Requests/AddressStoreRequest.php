<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AddressStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }


    /**
    * get the error messages that apply to the request.
    *
    * @return array
    */

    public function message()
    {
        return [
            'street.required' => 'street is required',
            'city.required' => 'city is required',
            'state.required' => 'state is required',
            'pincode.required' => 'pincode is required',
            'phone_number.required' => 'phone number is required',
        ];
    }



    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'street' => 'required',
            'city' => 'required',
            'state' => 'required',
            'pincode' => 'required',
            'phone_number' => 'required',
        ];
    }
}
