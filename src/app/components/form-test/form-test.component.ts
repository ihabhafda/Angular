import { Component } from '@angular/core';
import { LoginModel } from '../../models/login';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent {

  confirmPass: any;

  public login: LoginModel

  constructor() {
    this.login = new LoginModel;
  }

  onSubmit(form: NgForm){
    console.log(this.login);
  }
}
