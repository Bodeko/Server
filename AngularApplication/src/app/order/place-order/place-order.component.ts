import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
  addressId: number
  orderId: number
  constructor(private route: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit() {
    this.addressId = this.route.snapshot.params['id']
    this.orderService.placeOrder(this.addressId).subscribe(orderId => {
      this.orderId = orderId;
    })

  }

}
