import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  data: any;

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this._dataService.getData()
      .subscribe({
        next: (r) => this.data = r,
        error: (e) => console.log(e)
      });
  }



}
