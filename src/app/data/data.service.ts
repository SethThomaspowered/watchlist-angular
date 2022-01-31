import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _dataUrl = "https://watch-list-api.herokuapp.com/api/watchlists/1/symbols";

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>(this._dataUrl);
  }
}
