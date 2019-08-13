import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICartPivot } from 'src/app/models/cart';

@Component({
  selector: 'app-placed-product-list',
  templateUrl: './placed-product-list.component.html',
  styleUrls: ['./placed-product-list.component.css']
})
export class PlacedProductListComponent implements OnInit {
  @Input() product: ICartPivot
  @Output() removeProductFromCartById = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  removeFromCart(id){
    // console.log(id)
    this.removeProductFromCartById.emit(id)
  }

}
