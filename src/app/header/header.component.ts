import { AuthService } from './../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const TOKEN_KEY = 'AuthToken';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean;
  role: string;
  isAdmin: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  logout() {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.removeItem('username');
    window.sessionStorage.removeItem('userRole');
    window.sessionStorage.clear();
    this.authService.toggleLoggedIn();
    this.isAdmin = false;
    this.router.navigate(['login']);
  }

  checkIfAdmin() {
    this.authService.isAdmin().subscribe(
      isAdmin => this.isAdmin = isAdmin
    );
  }

  ngOnInit() {
    if (sessionStorage.getItem(TOKEN_KEY) != null) {
      this.loggedIn = true;
    }

    this.authService.change.subscribe(isLoggedIn => {
      this.loggedIn = isLoggedIn;
      console.log(this.loggedIn)
    });

    this.checkIfAdmin();

  }

}
