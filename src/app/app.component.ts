import { Component } from '@angular/core';
import { TokenStoreService } from './_services/token-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn = false;
  counterRegister = 0;
  counterLogin = 0;
  constructor(private tokenStorageService: TokenStoreService) {
  }
  ngOnInit() {
    this.tokenStorageService.getCartItemCount().subscribe(len => {
      if (localStorage.getItem('loggedIn') === 'true') {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    })
  }
  logout(): void {
    this.tokenStorageService.signOut();
    localStorage.setItem('loggedIn', 'false');
    window.location.reload();
  }

  updateRegister() {
    this.counterRegister += 1;
    if (this.counterRegister > 1) {
      window.location.reload();
    }
  }
  updateLogin() {
    this.counterLogin += 1;
    if (this.counterLogin > 1) {
      window.location.reload();
    }
  }
}
