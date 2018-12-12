import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private auth: AuthenticationService, private router: Router) { }

  credentials: TokenPayload = {
    email: '',
    password: ''
  };

  login() {
    this.auth.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/time-entry');
    }, (err) => {
      console.error(err);
    });
  }

}
