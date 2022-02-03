import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../home.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StockService } from 'src/app/stock-details/stock.service';
import { SideNavComponent } from '../side-nav/side-nav.component';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  myMath =  Math;
  watchlist: any;
  watchlistName: string = "";
  listIndex: any;
  constructor(private _homeService: HomeService, private route: ActivatedRoute, private modalService: NgbModal, private stockService: StockService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.listIndex = params['id'];
      this.getTickerInfo();
    })
    
  }

  getTickerInfo() {
    this._homeService.getAllTickers(this.listIndex).subscribe({
      next: r => {
        r.map((item:any) => {
          this.getTickerPrice(item);
        });
        this.watchlist = r;
        this.watchlistName = history.state.name;
      },
      error: e => console.log(e)
    })

  }
  updateList(){
    this.getTickerInfo();
  }
  getTickerPrice(item: any) {
    this.stockService.getStockData(item.ticker).subscribe(response => {
      item.data = response;
    })
  }
  openSearchBar(content: any) {
    let modelRef = this.modalService.open(content, { centered: true });
  }

  openConfirmBox(content: any, tickerIndex: any) {
    let modelRef = this.modalService.open(content, { centered: true });
    modelRef.result
    .then(() => {
      this._homeService.deleteTicker( tickerIndex, this.listIndex).subscribe(res => {
        this.updateList();
      })
    })
    .catch(() => {});
  
  }

  addToList(stock: any){

    this.stockService.getCompanyDetails(stock.symbol).subscribe({
      next: r => {
        this._homeService.createTicker(r, this.listIndex).subscribe(res => {
          this.updateList();
        })
      }
    })
  }

  deleteList(){
    console.log(this.listIndex);
    this._homeService.deleteWatchlist(this.listIndex).subscribe(res => {
      this.router.navigate(['lists']);
    })
  }


}
