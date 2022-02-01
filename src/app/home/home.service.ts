import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private _endpoint = "https://watch-list-api.herokuapp.com/api/watchlists";
  constructor(private http: HttpClient) { }

  getWatchLists() {
    return this.http.get<any>(this._endpoint);
  }

  getAllTickers(index: any) {
    return this.http.get<any>(this._endpoint + `/${index}/symbols`);
  }

  createWatchList() {
    
  }
}
