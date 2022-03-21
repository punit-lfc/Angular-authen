import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentUser: User = {
    name: '',
    comment: '',
    login: '',
    password: ''
  };
  form = new User;


  message = '';
  isSuccessful = false;
  isNameInvalid = false;
  isLoginInvalid = false;
  isPasswordInvalid = false;
  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    if (!this.viewMode) {
      this.message = '';
      this.getUser(this.route.snapshot.params["id"]);
    }
  }

  getUser(id: string) {
    this.userService.getUser(id)
      .subscribe({
        next: (data) => {
          this.currentUser = data;
          this.form.id = this.currentUser.id;
          this.form.name = this.currentUser.name;
          this.form.login = this.currentUser.login;
          this.form.comment = this.currentUser.comment;
        },
        error: (e) => console.error(e)
      });
  }

  updateUser() {
    this.message = '';
    const { name, comment, login, password } = this.form;
    this.userService.updateUser(this.form.id, this.form)
      .subscribe({
        next: (res) => {
          this.message = res.message ? res.message : 'This user was updated successfully!';
          this.isSuccessful = true;
          this.router.navigate(['/users']);
        },
        error: (e) => console.error(e)
      });
  }

  checkFields() {
    if (this.form.name !== '') {
      this.updateUser();
    }
  }
    // if (this.currentUser.login === null || this.currentUser.login === '') {
    //   this.isLoginInvalid = true;
    // } else {
    //   this.isLoginInvalid = false;
    // }
    // if (this.currentUser.password === null || this.currentUser.password === '') {
    //   this.isPasswordInvalid = true;
    // } else {
    //   this.isPasswordInvalid = false;
    // }
    // if (this.currentUser.name !== null && this.currentUser.name !== '' && this.currentUser.login !== null && this.currentUser.login !== ''
    // && this.currentUser.password !== null && this.currentUser.password !== '') {
    //   this.isNameInvalid = false;
    //   this.isLoginInvalid = false;
    //   this.isPasswordInvalid = false;
    //   this.updateUser();
    // }
  //  }

  deleteUser() {
    this.userService.deleteUser(this.form.id)
      .subscribe({
        next: (res) => {
          this.router.navigate(['/users']);
        },
        error: (e) => console.error(e)
      });
  }

  toMain() {
    this.router.navigate(['/', 'profile']);
  }

}
