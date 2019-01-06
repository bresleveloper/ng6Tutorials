import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'forms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm:FormGroup = new FormGroup({
        user: new FormControl("ariel", 
            Validators.compose([Validators.required])),
        pass: new FormControl("ariel passing", 
            Validators.compose([Validators.required])),
    })

    tryLogin(){
        console.log(this.loginForm.value)
    }


  constructor() { }

  ngOnInit() {
  }

}
