import { Component, OnInit } from '@angular/core';
import { ConnectableObservable } from 'rxjs';
import { AuthService } from '../auth.service';

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

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
      .subscribe({
        next: (r) => {
          console.log(r)
          localStorage.setItem('token', r.jwt)
        },
        error: (e) => console.log(e)
      })
  }
}
