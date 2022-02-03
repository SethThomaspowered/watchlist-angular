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
  companyData: any;
  companyFinancials: any;
  public myMath = Math;
  constructor(private route: ActivatedRoute, private stockService: StockService, private router: Router) { }

  ngOnInit(): void {
    //this.stock = history.state.currentStock;
    this.route.paramMap.subscribe(params => {

      let symbol = params.get('ticker') || '';
      
      this.stockService.getStockData(symbol).subscribe(response =>{
        this.stockData = response;
      });
      this.stockService.getCompanyDetails(symbol).subscribe(response =>{
        this.companyData = response;
      })
      this.stockService.getCompanyFinancials(symbol).subscribe(response =>{
        this.companyFinancials = response;
      })

    })
  }

}
