import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../home.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  watchlist: any;
  watchlistName: string = "";
  constructor(private _homeService: HomeService, private route: ActivatedRoute, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let index = params['id'];
      this._homeService.getAllTickers(index).subscribe({
        next: r => {
          this.watchlist = r;
          this.watchlistName = history.state.name;
        },
        error: e => console.log(e)
      })
    })
    
  }
  openVerticallyCentered(content: any) {
    let modelRef = this.modalService.open(content, { centered: true });
  }

}
