import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RouterModule } from '@angular/router';
import { userRoute } from './user.route';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddressComponent } from './address/address.component';
import { AddressListComponent } from './address/address-list/address-list.component';
import { AddressCreateComponent } from './address/address-create/address-create.component';
import { UserService } from '../services/user.service';
import { AuthenticateComponent } from './authenticate/authenticate.component';

@NgModule({
  imports:[
    CommonModule,
    RouterModule.forChild(userRoute),
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    LoginFormComponent,
    RegistrationFormComponent,
    AddressComponent,
    AddressListComponent,
    AddressCreateComponent,
    AuthenticateComponent
  ],

  exports: [
    AddressComponent,
    AddressCreateComponent,
    AddressListComponent
  ],

  providers: [
    UserService
  ]
})
export class UserModule { }
