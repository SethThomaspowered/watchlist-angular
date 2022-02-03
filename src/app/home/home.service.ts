import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private _endpoint = "https://watch-list-api.herokuapp.com/api/watchlists";
  constructor(private http: HttpClient) { }

  getWatchLists() {
    return this.http.get<any>(this._endpoint);
  }

  async getAllTickers(index: any) {
    let value = this.http.get<any>(this._endpoint + `/${index}/symbols`);
    return await lastValueFrom(value);
  }

  createWatchList(listObject: any) {
    return this.http.post<any>(this._endpoint, listObject);
  }

  createTicker(tickerObject:any, listIndex:any){
    let object = {
      ticker: tickerObject.ticker,
      companyName: tickerObject.name
    }
    return this.http.post<any>(this._endpoint+ `/${listIndex}/symbols`, object);
  }

  deleteWatchlist(listIndex: any) {
    return this.http.delete<any>(this._endpoint + `/${listIndex}`);
  }

  deleteTicker(tickerIndex: any, listIndex: any) {
    return this.http.delete<any>(this._endpoint + `/${listIndex}/symbols/${tickerIndex}`);
  }
}
