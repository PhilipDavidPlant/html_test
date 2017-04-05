import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'wb-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  constructor(public fire: AngularFire) {}

  login() {
    this.fire.auth.login();
  }

  logout() {
     this.fire.auth.logout();
  }

  ngOnInit() {
  }

Uymk}
