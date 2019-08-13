import { Component, OnInit } from '@angular/core';
import { ICartProduct } from '../models/cart';
import { CartService } from '../services/cart.service';
import { IAddress } from '../user/address/address';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: ICartProduct[]
  total: number = 0
  addressMode: string = 'select'
  hidden: boolean = false
  selectedAddress: IAddress
  addressSelected: boolean = false
  cartEmpty: boolean = true



  constructor(private cartService:CartService, private route:Router) { }

  ngOnInit() {
    this.cartService.getCartProducts().subscribe(data=> {
      this.products = data;
      data.forEach(p=>{
        this.total += p.cost * p.pivot.quantity
      })
      if(data.length > 0){
        this.cartEmpty = false
      }
    })
  }
  changeHidden(){
    this.hidden = !this.hidden
  }

  RemoveCartProduct(id){
    this.cartService.removeProductFromCartById(id).subscribe(() => {
      this.total = 0
      this.ngOnInit()
    })
  }

  setSelectedAddress(address){
    // console.log("at cart",address)
    this.selectedAddress = address
    this.addressSelected = true
  }

  placeOrder(){
    // this.cartService.placeOrder(this.selectedAddress.id).subscribe(order_id => {
    //   this.orderId = order_id;
    // })
    this.route.navigate(['/place-order', this.selectedAddress.id]);
  }
}
