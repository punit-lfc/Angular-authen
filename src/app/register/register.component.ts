import { Component, OnInit } from '@angular/core';
import { AuthenService } from '../_services/authen.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    name: null,
    comment: null,
    login: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
 
  constructor(private authenService: AuthenService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const { name, comment, login, password } = this.form;
    this.authenService.register(name, comment, login, password).subscribe({
      next: data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.error;
        this.isSignUpFailed = true;
      }
    });
  }

}
