import { Component, OnInit } from '@angular/core';
import { Station } from 'src/app/models/station.model';
import { UserService } from 'src/app/_services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-station',
  templateUrl: './add-station.component.html',
  styleUrls: ['./add-station.component.css']
})
export class AddStationComponent implements OnInit {
  form: any = {
    name: null,
    comment: null
  };
  submitted = false;
  isSuccessful = false;
  isCreateFailed = false;
  errorMessage = '';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  saveStation() {
    const { name, comment } = this.form;
    this.userService.createStation(name, comment)
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
  newStation() {
    this.submitted = false;
    this.isSuccessful = false;
    this.form = {
      name: null,
      comment: null
    };
  }

  toMain() {
    this.router.navigate(['/', 'profile']);
  }

}
