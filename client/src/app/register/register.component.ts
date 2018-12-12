import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private auth: AuthenticationService, private router: Router) { }

  credentials: TokenPayload = {
    email: '',
    name: '',
    password: ''
  };

  register() {
    this.auth.register(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/time-entry');
    }, (err) => {
      console.error(err);
    });
  }

}
