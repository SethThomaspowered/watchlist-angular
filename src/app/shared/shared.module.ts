import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search/search.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastsContainerComponent } from './toasts-container/toasts-container.component';

@NgModule({
  declarations: [
    SearchComponent,
    ToastsContainerComponent
  ],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    NgbModule
  ],
  providers:[
    SearchService
  ],
  exports: [
    SearchComponent,
    ToastsContainerComponent
  ]
})
export class SharedModule { }
