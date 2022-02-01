import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData : any = {
    email: null,
    password: null
  };

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
      .subscribe({
        next: (r) => {
          localStorage.setItem('token', r.jwt)
          this._router.navigate(['lists'])
        },
        error: (e) => console.log(e)
      })
  }
}
