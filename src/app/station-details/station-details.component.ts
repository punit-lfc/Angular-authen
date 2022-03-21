import { Component, Input, OnInit } from '@angular/core';
import { Station } from 'src/app/models/station.model';
import { UserService } from 'src/app/_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as e from 'express';


@Component({
  selector: 'app-station-details',
  templateUrl: './station-details.component.html',
  styleUrls: ['./station-details.component.css']
})
export class StationDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentStation: Station = {
    name: '',
    comment: ''
  };
  form = new Station;

  message = '';
  isNameInvalid = false;
  isLoginInvalid = false;
  isPasswordInvalid = false;
  isSuccessful = false;

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    if (!this.viewMode) {
      this.message = '';
      this.getStation(this.route.snapshot.params["id"]);
    }
  }

  getStation(id: string) {
    this.userService.getStation(id)
      .subscribe({
        next: (data) => {
          this.currentStation = data;
          this.form.id = this.currentStation.id;
          this.form.name = this.currentStation.name;
          this.form.comment = this.currentStation.comment;
        },
        error: (e) => console.error(e)
      });
  }

  checkFields() {
    if (this.form.name !== '') {
      this.updateStation();
    }
  }

  updateStation() {
    this.message = '';
    const { name, comment } = this.form;
    this.userService.updateStation(this.form.id, this.form)
      .subscribe({
        next: (res) => {
          this.message = res.message ? res.message : 'This station was updated successfully!';
          this.isSuccessful = true;
          this.router.navigate(['/stations']);
        },
        error: (e) => console.error(e)
      });
  }

  deleteStation() {
    this.userService.deleteStation(this.form.id)
      .subscribe({
        next: (res) => {
          this.router.navigate(['/stations']);
        },
        error: (e) => console.error(e)
      });
  }

  toMain() {
    this.router.navigate(['/', 'profile']);
  }

}
