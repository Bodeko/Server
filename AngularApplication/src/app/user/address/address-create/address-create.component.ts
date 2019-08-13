import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-address-create',
  templateUrl: './address-create.component.html',
  styleUrls: ['./address-create.component.css']
})
export class AddressCreateComponent implements OnInit {
  @Output() createAddressValues = new EventEmitter()
  createAddressForm:FormGroup

  constructor(private userService: UserService) { }

  ngOnInit() {
    let street = new FormControl()
    let city = new FormControl()
    let state = new FormControl()
    let phone_number = new FormControl()
    let pincode = new FormControl()

    this.createAddressForm = new FormGroup({
      street: street,
      city: city,
      state: state,
      phone_number: phone_number,
      pincode: pincode
    })
  }

  create(formValues){
    // console.log(formValues)
    this.createAddressValues.emit(formValues)
  }


}
