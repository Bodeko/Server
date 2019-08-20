import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-address-create',
  templateUrl: './address-create.component.html',
  styleUrls: ['./address-create.component.css']
})
export class AddressCreateComponent implements OnInit {
  @Output() createAddressValues = new EventEmitter()
  createAddressForm:FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder) { }

  ngOnInit() {
    // let street = new FormControl()
    // let city = new FormControl()
    // let state = new FormControl()
    // let phone_number = new FormControl()
    // let pincode = new FormControl()

    this.createAddressForm = this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      phone_number: [''],
      pincode: ['']
    });
  }

  create(formValues){

    this.createAddressValues.emit(formValues)
  }


}
