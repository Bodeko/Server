import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ILoggedUser } from '../../models/user';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup
  constructor(private userService: UserService, private route: Router, private auth: AuthService) { }

  ngOnInit() {
    let email = new FormControl()
    let password = new FormControl()

    this.loginForm = new FormGroup({
      email: email,
      password: password
    })
  }

  login(formValues){
    if(this.loginForm.valid){
      // this.userService.login(formValues).subscribe(data => {
      //   localStorage.setItem('accessToken', data.access_token);
      //   localStorage.setItem('userName', data.user.name);
      //   // console.log(data.access_token)
      //   this.route.navigate(['/home']).then(() => {
      //     window.location.reload();
      //   });
      // });
      this.auth.login(formValues);
    }
  }



}
