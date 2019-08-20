import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { cartRoute } from './cart.routes';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductModule } from '../product/product.module';
import { CartService } from '../services/cart.service';
import { UserService } from '../services/user.service';
import { CartShowComponent } from './cart-show/cart-show.component';
import { AddressModule } from '../address/address.module';

@NgModule({
  declarations: [
    CartShowComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(cartRoute),
    ReactiveFormsModule,
    FormsModule,
    ProductModule,
    AddressModule
  ],
  providers: [
    CartService,
    UserService
  ]
})
export class CartModule { }
