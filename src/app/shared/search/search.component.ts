import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { debounceTime, distinctUntilChanged } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output('parentFunc') parentFunc: EventEmitter<any> = new EventEmitter();

  myControl = new FormControl();
  filteredOptions: any ;

  constructor(private searchService: SearchService){}


  ngOnInit(): void {
    this.myControl.valueChanges
      .pipe(debounceTime(300),distinctUntilChanged())
      .subscribe(value => {
        if(value) {
          this.searchService.search(value).subscribe(response => {
            this.filteredOptions = response;
          })
        }
      })
  }

  displayFn(subject: any){
    return subject ? subject.description + "-" + subject.displaySymbol : "";
  }

  callParent(data: any) {
    this.parentFunc.emit(data);
  }
  
}
