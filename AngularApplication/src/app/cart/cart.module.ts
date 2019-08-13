import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';
import { cartRoute } from './cart.routes';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductModule } from '../product/product.module';
import { UserModule } from '../user/user.module';
import { CartService } from '../services/cart.service';
import { UserService } from '../services/user.service';

@NgModule({
  declarations: [
    CartComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(cartRoute),
    ReactiveFormsModule,
    FormsModule,
    ProductModule,
    UserModule
  ],
  providers: [
    CartService,
    UserService
  ]
})
export class CartModule { }
