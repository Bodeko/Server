import { Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { ProductShowComponent } from './app/product/product-show/product-show.component';
import { PlaceOrderComponent } from './app/order/place-order/place-order.component';
import { OrderComponent } from './app/order/order.component';
import { BuyNowComponent } from './app/order/buy-now/buy-now.component';
import { AuthGuard } from './app/auth.guard';
import { ErrorComponent } from './app/error/error/error.component';



export const appRoute: Routes = [
    // {path: 'categories', loadChildren: () => import('./app/categories/categories.module').then(m => m.CategoriesModule)},
    // {path: 'user', loadChildren: () => import('./app/user/user.module').then(m => m.UserModule)},
    // {path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)},

    {path: '', redirectTo: 'home' , pathMatch: 'full'},
    {path: 'user', loadChildren: './user/user.module#UserModule', canActivate: [AuthGuard]},
    // {path: 'categories', loadChildren: './categories/categories.module#CategoriesModule'},
    {path: 'cart', loadChildren: './cart/cart.module#CartModule', canActivate: [AuthGuard]},

    {path: 'home', component: HomeComponent},
    {path: 'products/:id', component: ProductShowComponent},
    {path: 'buynow/:id', component: BuyNowComponent, canActivate: [AuthGuard]},
    {path: 'place-order/:id', component: PlaceOrderComponent, canActivate: [AuthGuard]},


    {path: 'orders', component: OrderComponent, canActivate: [AuthGuard]},

    {path: '**', component: ErrorComponent},





];
