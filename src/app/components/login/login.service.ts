import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  constructor() {}

  login(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      this.isLoggedIn = true;
      this.isAdmin = true;
    }

    if (username === 'user' && password === 'user') {
      this.isLoggedIn = true;
      this.isAdmin = false;
    }

    return this.isLoggedIn;
  }
}
