import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private customHttpClient: HttpClient;

  constructor(backend: HttpBackend) {
    this.customHttpClient = new HttpClient(backend);
  }

  getStockData(symbol: string) {
    return this.customHttpClient.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=sandbox_c7tee7aad3i8dq4u1910`);
  }
}
