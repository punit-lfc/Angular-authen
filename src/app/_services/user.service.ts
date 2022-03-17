import { Injectable } from '@angular/core';
const TOKEN_KEY = 'auth-token';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
const base_URL = 'https://piar.meew.me/users';
const base_URL1 = 'https://piar.meew.me/stations';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(base_URL);
  }
  getUser(id: any): Observable<User> {
    return this.http.get(`${base_URL}/${id}`);
  }
  createUser(data: any): Observable<any> {
    return this.http.post(base_URL, data);
  }
  updateUser(id: any, data: any): Observable<any> {
    return this.http.patch(`${base_URL}/${id}`, data);
  }
  deleteUser(id: any): Observable<any> {
    return this.http.delete(`${base_URL}/${id}`);
  }
  getStations(): Observable<User[]> {
    return this.http.get<User[]>(base_URL1);
  }
  getStation(id: any): Observable<User> {
    return this.http.get(`${base_URL1}/${id}`);
  }
  createStation(data: any): Observable<any> {
    return this.http.post(base_URL1, data);
  }
  updateStation(id: any, data: any): Observable<any> {
    return this.http.patch(`${base_URL1}/${id}`, data);
  }
  deleteStation(id: any): Observable<any> {
    return this.http.delete(`${base_URL1}/${id}`);
  }
}
