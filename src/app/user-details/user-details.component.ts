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

  message = '';
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
        },
        error: (e) => console.error(e)
      });
  }

  updateUser() {
    this.message = '';
    this.userService.updateUser(this.currentUser.id, this.currentUser)
      .subscribe({
        next: (res) => {
          this.message = res.message ? res.message : 'This user was updated successfully!';
          this.router.navigate(['/users']);
        },
        error: (e) => console.error(e)
      });
  }
  deleteUser() {
    this.userService.deleteUser(this.currentUser.id)
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
