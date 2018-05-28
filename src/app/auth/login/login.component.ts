import { TokenStorage } from './../../services/auth/token.storage';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";

  onLoginFormSubmit(forma: NgForm) {
    this.authService.attemptAuth(this.username, this.password).subscribe(
      data => {
        this.token.saveToken(data.token);
        console.log("Token: " + data.token);
        this.authService.toggleLoggedIn();
        window.sessionStorage.setItem('username', data.username);
        this.router.navigate(['/home']);
      }
    )
  }


  constructor(
    private authService: AuthService,
    private token: TokenStorage,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
