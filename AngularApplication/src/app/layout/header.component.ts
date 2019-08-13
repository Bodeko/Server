import { Component, OnInit } from "@angular/core";
import { ApiService } from '../services/api.service';
import { IUser } from '../models/user';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/Authentication.service';

@Component({
    selector: "header",
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit{
  loggedIn: boolean = false
  constructor(private api: ApiService, private route: Router, private auth:AuthenticationService) {
    if(localStorage.getItem('accessToken') !== null) {
      this.loggedIn = true;
    }
  }

  ngOnInit(){

  }

  logout(){
    this.loggedIn = false;
    this.auth.logout();


  }

}
