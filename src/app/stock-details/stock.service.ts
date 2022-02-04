import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { last, lastValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private customHttpClient: HttpClient;

  constructor(backend: HttpBackend) {
    this.customHttpClient = new HttpClient(backend);
  }

  async getStockData(symbol: string) {
    let val = this.customHttpClient.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=sandbox_c7tee7aad3i8dq4u1910`);
    return await lastValueFrom(val);
  }

  async getCompanyDetails(symbol: string) {
    let val = this.customHttpClient.get(`https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=c7tee7aad3i8dq4u190g`);
    return await lastValueFrom(val);
  }

  async getCompanyFinancials(symbol: string) {
      let val = this.customHttpClient.get(`https://finnhub.io/api/v1/stock/metric?symbol=${symbol}&metric=all&token=c7tee7aad3i8dq4u190g`);
      return await lastValueFrom(val);
  }
}
