import { Component, OnInit } from '@angular/core';
import { IOrder, IOrderDetails } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: IOrder[];
  orderDetail: IOrderDetails;
  selectedOrder: IOrder;
  orderSelected: boolean = false;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getAllOrders().subscribe(data => {
      this.orders = data;
      console.log(this.orders);
    });
  }

  getorderDetailsById(order){
    this.orderSelected = true;
    this.selectedOrder = order;
    this.orderService.getOrderDetailsById(order.id).subscribe(data => {
      this.orderDetail = data;
      // console.log(this.orderDetail)
    });
  }

}
