import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { IOrder, IOrderDetails } from '../models/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders: IOrder[]
  orderDetail: IOrderDetails
  selectedOrder: IOrder
  orderSelected: boolean = false

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getAllOrders().subscribe(data=>{
      this.orders = data
      console.log(this.orders)
    })
  }

  getorderDetailsById(order){
    this.orderSelected = true
    this.selectedOrder = order
    this.orderService.getOrderDetailsById(order.id).subscribe(data => {
      this.orderDetail = data
      // console.log(this.orderDetail)
    })
  }

}
