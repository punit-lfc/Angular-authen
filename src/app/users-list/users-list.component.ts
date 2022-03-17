import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users?: User[];
  currentUser: User = {};
  currentIndex = -1;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.retrieveUsers();
  }

  retrieveUsers() {
    this.userService.getUsers()
      .subscribe({
        next: (data) => {
          this.users = data;
        },
        error: (e) => console.error(e)
      });
  }

  refreshList() {
    this.retrieveUsers();
    this.currentUser = {};
    this.currentIndex = -1;
  }
  setActiveUser(user: User, index: number): void {
    this.currentUser = user;
    this.currentIndex = index;
  }
}
