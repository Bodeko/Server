import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IAddress } from '../address';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
  @Input() address: IAddress
  @Output() sendSelectedAddressToAddress = new EventEmitter
  constructor() {
  }

  ngOnInit() {

  }

  setAddressToCart(){
    this.sendSelectedAddressToAddress.emit(this.address)
  }

}
