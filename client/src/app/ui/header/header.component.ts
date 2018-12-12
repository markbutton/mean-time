import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navbarOpen = false;

  constructor(public auth: AuthenticationService) { }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
