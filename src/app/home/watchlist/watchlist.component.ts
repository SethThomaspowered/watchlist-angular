import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../home.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StockService } from 'src/app/stock-details/stock.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit{
  myMath =  Math;
  watchlist: any;
  listIndex: any;
  newList: any = {
    name: null
  }

  constructor(private _homeService: HomeService, private route: ActivatedRoute, private modalService: NgbModal, private stockService: StockService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.listIndex = params['id'];
      this.getTickerInfo();
    })
    
  }

  getTickerInfo() {

    this._homeService.getAllTickers(this.listIndex).then(
      res => {
        res.map((item: any) => {
          this.getTickerPrice(item);
        });
        this.watchlist = res;
        this.newList.name = this.watchlist[0].watchLists[0].name;
      }
    )

  }

  updateList(){
    this.getTickerInfo();
  }
  getTickerPrice(item: any) {
    this.stockService.getStockData(item.ticker).then(response => {
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
    this._homeService.deleteWatchlist(this.listIndex).subscribe(res => {
      this.router.navigate(['lists']);
    })
  }

  openRenameBox(content: any){
    let modelRef = this.modalService.open(content, { centered: true });
    modelRef.result
    .then(() => {
      this.renameList();
    })
    .catch(() => {});
  
  }
  renameList() {
    this._homeService.renameList(this.listIndex, this.newList).subscribe(res => {
      this._homeService.emitChange({property: 'value'});
      this.updateList();
      
    })
  }
}
