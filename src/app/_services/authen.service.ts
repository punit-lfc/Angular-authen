import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API = 'https://piar.meew.me/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor(private http: HttpClient) { }
  login(login: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'users/auth', {
      login,
      password
    }, httpOptions);
  }
  register(name: string, comment: string, login: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'users', {
      name,
      comment,
      login,
      password
    }, httpOptions);
  }
}
