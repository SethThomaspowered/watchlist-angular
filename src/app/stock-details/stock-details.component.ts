import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockService } from './stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {
  stockData: any;
  stock: any;
  public myMath = Math;
  constructor(private route: ActivatedRoute, private stockService: StockService, private router: Router) {
    // this.stock = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
    //this.stock = history.state.currentStock;
    this.route.paramMap.subscribe(params => {
      let symbol = params.get('ticker') || '';
      this.stock = JSON.parse(params.get('currentStock') || '');
      console.log(this.stock.description);
      this.stockService.getStockData(symbol).subscribe(response =>{
        this.stockData = response;
      })
    })
  }

}
