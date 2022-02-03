import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastService } from '../shared/toasts-container/toast.service';

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

  constructor(private _auth: AuthService, private _router: Router, private toastService: ToastService) { }

  ngOnInit(): void {
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
      .subscribe({
        next: (r) => {
          localStorage.setItem('token', r.jwt);
          this.toastService.showSuccess("Login Succesfully!");
          this._router.navigate(['lists']);
        },
        error: (e) => {
          this.toastService.showError("Login Fails! Try Again");
        }
      })
  }

}
