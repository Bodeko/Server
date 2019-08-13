import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  signupForm: FormGroup

  constructor(private userService: UserService) { }

  ngOnInit() {
    let name = new FormControl()
    let email = new FormControl()
    let password = new FormControl()
    let password_confirmation = new FormControl()


    this.signupForm = new FormGroup({
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    })
  }

  SignUp(formValues){
    this.userService.register(formValues).subscribe(data =>{
      localStorage.setItem('accessToken', data.access_token);
    })
  }

}
