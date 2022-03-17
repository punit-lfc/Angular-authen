import { Component, OnInit } from '@angular/core';
import { AuthenService } from '../_services/authen.service';
import { TokenStoreService } from '../_services/token-store.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    login: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  private storageSub = new Subject<string>();


  constructor(private authenService: AuthenService, private tokenStorage: TokenStoreService, private router: Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit() {
    const { login, password } = this.form;
    this.authenService.login(login, password).subscribe({
      next: data => {
        if (data && data.user_jwt) {
          localStorage.setItem('loggedIn', 'true');
          this.tokenStorage.saveToken(data.user_jwt);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.router.navigate(['/', 'profile']);
        }
      },
      error: err => {
        this.errorMessage = err.error.error;
        this.isLoginFailed = true;
      }
    });
  }
  reloadPage(): void {
    window.location.reload();
  }
}
