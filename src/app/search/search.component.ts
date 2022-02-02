import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  myControl = new FormControl();
  filteredOptions: any ;

  constructor(private searchService: SearchService){}


  ngOnInit(): void {
    this.myControl.valueChanges
      .pipe(distinctUntilChanged())
      .subscribe(value => {
        this.searchService.search(value).subscribe(response => {
          console.log(response)
          this.filteredOptions = response;
        })
      })
  }


  displayFn(subject: any){
    return subject ? subject.description + "-" + subject.displaySymbol : "";
  }

  dosomething(option: any) {
    console.log(option);
  }
}
