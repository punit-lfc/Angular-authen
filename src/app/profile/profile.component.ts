import { Component, OnInit } from '@angular/core';
import { TokenStoreService } from '../_services/token-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private token: TokenStoreService, private router: Router) { }

  ngOnInit() {
  }

  goToUsers() {
    this.router.navigate(['/', 'users']);
  }

  addUser() {
    this.router.navigate(['/', 'add']);
  }

  goToStations() {
    this.router.navigate(['/', 'stations']);
  }

  addStation() {
    this.router.navigate(['/', 'addStation']);
  }
}
