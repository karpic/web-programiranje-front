import { Router } from '@angular/router';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserCreation } from '../../models/userCreation.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser: UserCreation = new UserCreation('','','','',0,'', new Date());

  onRegisterFormSubmit(forma: NgForm) {
    this.newUser.firstName = forma.value.firstname;
    this.newUser.lastName = forma.value.lastname;
    this.newUser.email = forma.value.email;
    this.newUser.username = forma.value.username;
    this.newUser.password = forma.value.password;
    this.newUser.phoneNumber = forma.value.phonenum;

    this.usersService.registerUser(this.newUser).subscribe();
    this.router.navigate(['/login']);
  }

  resetForm(forma: NgForm) {
    forma.reset();
  }

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
