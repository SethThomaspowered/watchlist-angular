import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  watchlists: any;
  constructor(private _homeService: HomeService) { }

  ngOnInit(): void {
    this._homeService.getWatchLists().subscribe({
      next: r => this.watchlists = r,
      error: e => console.log(e)
    })
  }

}
