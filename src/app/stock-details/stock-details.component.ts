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

    this.route.paramMap.subscribe(params => {

      let symbol = params.get('ticker') || '';
      this.getStockData(symbol);
      this.getCompanyDetails(symbol);
      this.getCompanyFinancials(symbol);
    })
  }
  getStockData(symbol: any) {
    this.stockService.getStockData(symbol).then(response =>{
      this.stockData = response;
    });
  }

  getCompanyDetails(symbol: any){
    this.stockService.getCompanyDetails(symbol).then(response =>{
      this.companyData = response;
    })
  }
  getCompanyFinancials(symbol:any) {
    this.stockService.getCompanyFinancials(symbol).then(response =>{
      this.companyFinancials = response;
    })

  }
  parentFunc(data:any){
    this.router.navigate(['symbol', data.symbol]);
  }



}
