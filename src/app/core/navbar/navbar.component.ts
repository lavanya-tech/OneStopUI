import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  public isLoggedIn = false;

  login() {
    // perform login logic here
    this.isLoggedIn = true;
  }

  logout() {
    // perform logout logic here
    this.isLoggedIn = false;
  }
  handleButtonPractice() {
    this.router.navigate(['/practice']);
  }
  handleButtonContest() {
    this.router.navigate(['/contests']);
  }
  handleButtonLogin() {
    this.router.navigate(['/login']);
  }

  constructor(private router: Router) {}
}
