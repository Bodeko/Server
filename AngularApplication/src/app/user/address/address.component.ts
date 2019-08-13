import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IAddress } from './address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  addressMode: string = 'create';
  address: IAddress[]
  @Output() setSelectedAddressInCart =  new EventEmitter()
  constructor(private userService:UserService) { }

  ngOnInit() {

    this.userService.getAddress().subscribe(data =>{
      this.address = data
      if(this.address.length > 0){
        this.addressMode = 'select'
      }
    })
  }

  createAddress(data){
    // console.log(data)
    this.userService.createAddress(data).subscribe(data=>{
      // console.log(data)
      this.addressMode = 'select'
      this.ngOnInit();
    });

  }

  setSelectedAddress(address){
    // console.log(id)
    this.setSelectedAddressInCart.emit(address)
  }
}
