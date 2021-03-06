import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStoreService {
  private ItemCount = new BehaviorSubject<number>(0);
  cartItem = [];
  constructor() { }
  signOut(): void {
    window.sessionStorage.clear();
  }
  getCartItemCount() {
    return this.ItemCount.asObservable();
  }
  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
    this.ItemCount.next(localStorage.length);
  }
  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
}
