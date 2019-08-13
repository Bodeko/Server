import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { OrderComponent } from './order.component';
import { OrderService } from '../services/order.service';
import { ProductModule } from '../product/product.module';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderProductListComponent } from './order-product-list/order-product-list.component';
import { RouterModule } from '@angular/router';
import { BuyNowComponent } from './buy-now/buy-now.component';
import { UserModule } from '../user/user.module';

@NgModule({
  declarations: [
    PlaceOrderComponent,
    OrderComponent,
    OrderDetailsComponent,
    OrderProductListComponent,
    BuyNowComponent,
  ],
  imports: [
    CommonModule,
    ProductModule,
    RouterModule,
    UserModule
  ],
  exports: [
    PlaceOrderComponent,
    OrderComponent,
    BuyNowComponent

  ],
  providers: [
    OrderService
  ]
})
export class OrderModule { }
