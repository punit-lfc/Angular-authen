import { Component, Input, OnInit } from '@angular/core';
import { Station } from 'src/app/models/station.model';
import { UserService } from 'src/app/_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';


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

  message = '';

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
        },
        error: (e) => console.error(e)
      });
  }

  updateStation() {
    this.message = '';
    this.userService.updateStation(this.currentStation.id, this.currentStation)
      .subscribe({
        next: (res) => {
          this.message = res.message ? res.message : 'This station was updated successfully!';
          this.router.navigate(['/stations']);
        },
        error: (e) => console.error(e)
      });
  }
  deleteStation() {
    this.userService.deleteStation(this.currentStation.id)
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
