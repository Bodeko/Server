import { Component, OnInit, Input } from '@angular/core';
import { ICartProduct } from 'src/app/models/cart';
import { IAddress } from 'src/app/user/address/address';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  @Input() products: ICartProduct
  @Input() address: IAddress
  @Input() orderId: number
  @Input() total: number

  constructor() { }

  ngOnInit() {
  }

}
