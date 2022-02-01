import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  watchlists: any;
  listName: any;

  constructor(private _homeService: HomeService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this._homeService.getWatchLists().subscribe({
      next: r => this.watchlists = r,
      error: e => console.log(e)
    })
  }

  openVerticallyCentered(content: any) {
    let modelRef = this.modalService.open(content, { centered: true });
    modelRef.result
      .then(() => {})
      .catch(() => {});
    
  }
}
