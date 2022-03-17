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
  station: Station = {
    name: '',
    comment: ''
  };
  submitted = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  saveStation() {
    const data = {
      name: this.station.name,
      comment: this.station.comment
    };
    this.userService.createStation(data)
      .subscribe({
        next: (res) => {
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newStation() {
    this.submitted = false;
    this.station = {
      name: '',
      comment: ''
    };
  }

  toMain() {
    this.router.navigate(['/', 'profile']);
  }

}
