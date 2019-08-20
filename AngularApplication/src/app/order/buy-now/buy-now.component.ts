import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { IAddress } from 'src/app/models/address';
import { IProduct } from 'src/app/models/product';

@Component({
  selector: 'app-buy-now',
  templateUrl: './buy-now.component.html',
  styleUrls: ['./buy-now.component.css']
})
export class BuyNowComponent implements OnInit {
  hidden: boolean = false;
  selectedAddress: IAddress;
  addressSelected: boolean = false;
  product: IProduct;
  orderplaced: boolean = false;
  orderId: any;


  constructor(private orderService: OrderService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.orderService.getProductById(this.route.snapshot.params['id']).subscribe(data => {
      this.product = data;
    })
  }

  changeHidden(){
    this.hidden = !this.hidden;
  }

  setSelectedAddress(address) {
    // console.log("at cart",address)
    this.selectedAddress = address;
    this.addressSelected = true;
  }


  BuyNow(){
    this.orderService.buyNow({'product_id': this.product.id, 'address_id': this.selectedAddress.id}).subscribe(data => {
      this.orderId = data;
      this.orderplaced = true;
    })
  }


}
