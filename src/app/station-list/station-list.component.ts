import { Component, OnInit } from '@angular/core';
import { Station } from 'src/app/models/station.model';
import { UserService } from 'src/app/_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent implements OnInit {
  stations?: Station[];
  currentStation: Station = {};
  currentIndex = -1;

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.retrieveStations();
  }

  retrieveStations() {
    this.userService.getStations()
      .subscribe({
        next: (data) => {
          this.stations = data;
        },
        error: (e) => console.error(e)
      });
  }

  refreshList() {
    this.retrieveStations();
    this.currentStation = {};
    this.currentIndex = -1;
  }
  setActiveStation(station: Station, index: number): void {
    this.currentStation = station;
    this.currentIndex = index;
  }

  toMain() {
    this.router.navigate(['/', 'profile']);
  }
}
