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
  user: User = {
    name: '',
    comment: '',
    login: '',
    password: ''
  };
  submitted = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  saveUser() {
    const data = {
      name: this.user.name,
      comment: this.user.comment,
      login: this.user.login,
      password: this.user.password
    };
    this.userService.createUser(data)
      .subscribe({
        next: (res) => {
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newUser() {
    this.submitted = false;
    this.user = {
      name: '',
      comment: '',
      login: '',
      password: ''
    };
  }

  toMain() {
    this.router.navigate(['/', 'profile']);
  }

}
