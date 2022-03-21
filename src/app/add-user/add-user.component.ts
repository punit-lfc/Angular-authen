import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  form: User = {
    name: null,
    comment: null,
    login: null,
    password: null
  };
  submitted = false;
  isSuccessful = false;
  isCreateFailed = false;
  errorMessage = '';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  saveUser() {
    const { name, comment, login, password } = this.form;
    this.userService.createUser(name, comment, login, password)
      .subscribe({
        next: (res) => {
          this.submitted = true;
          this.isSuccessful = true;
          this.isCreateFailed = false;
        },
        error: err => {
          this.errorMessage = err.error.error;
          this.isCreateFailed = true;
        }
      });
  }
  newUser() {
    this.submitted = false;
    this.isSuccessful = false;
    this.form = {
      name: null,
      comment: null,
      login: null,
      password: null
    };
  }

  toMain() {
    this.router.navigate(['/', 'profile']);
  }

}
