import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private route: Router, private loginService: LoginService) {}
  
  login() {
    if (this.loginService.login(this.username, this.password)) { 
      this.route.navigate(['/rooms']);
    }

    else
    console.log("username or psd incorrect");
    
  }
}
