import { Injectable } from "@angular/core";
import { IOrder, IOrderDetails } from '../models/order';
import { ApiService } from './api.service';
import { IProduct } from '../models/product';

@Injectable()

export class OrderService{

  constructor(private api: ApiService) { }


  getAllOrders(){
    return this.api.get<IOrder[]>('/orders', 'getAllOrders');
  }

  getOrderDetailsById(id: number) {
    return this.api.get<IOrderDetails>('/orders/' + id, 'getOrderDetailsById');
  }

  placeOrder(address_id) {
    return this.api.post<number>('/orders', {'address_id': address_id}, 'placeOrder');
  }

  getProductById(id) {
    return this.api.get<IProduct>('/products/' + id, 'getProductsById');
  }

  buyNow(data){
    return this.api.post<number>('/orders/buynow', data, 'buyNow');
  }

}
