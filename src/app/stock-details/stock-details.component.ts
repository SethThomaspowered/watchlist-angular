import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockService } from './stock.service';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {
  stockData: any;
  constructor(private route: ActivatedRoute, private stockService: StockService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let symbol = params.get('ticker') || '';
      this.stockService.getStockData(symbol).subscribe(response =>{
        this.stockData = response;
      })
    })
  }

}
