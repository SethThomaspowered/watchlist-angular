import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'watchlist-frontend';
  public isMenuCollapsed = true;

  constructor(private _authService: AuthService){}


  ngOnInit(): void {
  }


  loggedIn(){
    return this._authService.loggedIn();
  }

  logoutUser(){
    return this._authService.logoutUser();
  }

}
