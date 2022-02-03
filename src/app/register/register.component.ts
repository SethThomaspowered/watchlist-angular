import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastService } from '../shared/toasts-container/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData : any = {
    emailAddress: null,
    password: null
  };

  constructor(private _auth: AuthService, private _router: Router, private toastService: ToastService) { }

  ngOnInit(): void {
  }

  registerUser() {
    this._auth.registerUser(this.registerUserData)
      .subscribe({
        next: (r) => {
          this.toastService.showSuccess("Register Sucessfully! Please Login.");
          this._router.navigate(['login']);
        },
        error: (e) => {
          this.toastService.showError("Register Fails! Please try again.")
        }
      });
  }
}
