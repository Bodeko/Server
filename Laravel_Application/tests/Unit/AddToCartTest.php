<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\User;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class AddToCartTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_user_can_add_product_to_cart()
    {
        $this->withoutExceptionHandling();
        // $user = $this->post('login', [
        //     'email' => 'shivam@gmail.com',
        //     'password' => 'qqqqqqqq'
        // ]);
        $response = $this->actingAs(factory(User::class)->create())->post('/carts/1', ['quantity' => 1])->assertRedirect('/carts');
    }
}
