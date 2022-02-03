import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private customHttpClient: HttpClient;
  searchUrl = "https://ws.finnhub.io/api/v1/search?q=";

  constructor(backend: HttpBackend) {
    this.customHttpClient = new HttpClient(backend);
  }

  search(searchString: string) {
    return this.customHttpClient.get(`https://finnhub.io/api/v1/search?q=${searchString}&token=sandbox_c7tee7aad3i8dq4u1910`).pipe(
      map((response: any) => response['result'])
    )
  }
}
