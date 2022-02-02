import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  myControl = new FormControl();
  filteredOptions: any ;

  constructor(private searchService: SearchService, private router: Router){}


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

  redirectToStockDetails(option: any) {
    this.router.navigate(['symbol', option.symbol, { currentStock: JSON.stringify(option) }]);
  }
}
