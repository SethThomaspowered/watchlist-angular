import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _dataUrl = "http://localhost:9092/api/watchlists/2/symbols";

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>(this._dataUrl);
  }
}
