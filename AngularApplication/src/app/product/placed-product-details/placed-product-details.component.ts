import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../models/product';
import { ICartProduct } from 'src/app/models/cart';

@Component({
  selector: 'app-placed-product-details',
  templateUrl: './placed-product-details.component.html',
  styleUrls: ['./placed-product-details.component.css']
})
export class PlacedProductDetailsComponent implements OnInit {
  @Input()  products: ICartProduct[]
  @Output() toCartRemoveproductFromCart = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  removeProductFromCart(data){
    // console.log(data)
    this.toCartRemoveproductFromCart.emit(data)
  }

}
