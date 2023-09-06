import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  faUser,
  faExclamation,
  faKey,
} from '@fortawesome/free-solid-svg-icons';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  buttonState: boolean = true;
  submitted: boolean = false;
  faUser = faUser;
  faKey = faKey;
  faExclamation = faExclamation;

  constructor(private formBuilder: FormBuilder) {
  
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember_me: [true],
    });
  }



  get validation(){
    if(this.form.controls['username'].errors!=null || this.form.controls['password'].errors!=null){
      this.buttonState=false;
      return true;
    }
    this.buttonState=true;
    return false;
  }

  login() {
    this.submitted=true
    
  }
}
