import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../services/order.service';
import { ProductModule } from '../product/product.module';
import { OrderProductListComponent } from './order-product-list/order-product-list.component';
import { RouterModule } from '@angular/router';
import { BuyNowComponent } from './buy-now/buy-now.component';
import { AddressModule } from '../address/address.module';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderShowComponent } from './order-show/order-show.component';
import { OrderPlaceComponent } from './order-place/order-place.component';

@NgModule({
  declarations: [
    OrderProductListComponent,
    BuyNowComponent,
    OrderListComponent,
    OrderShowComponent,
    OrderPlaceComponent,
  ],
  imports: [
    CommonModule,
    ProductModule,
    RouterModule,
    AddressModule
  ],
  exports: [
    BuyNowComponent,
    OrderListComponent,
    OrderPlaceComponent

  ],
  providers: [
    OrderService
  ]
})
export class OrderModule { }
