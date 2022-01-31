import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const home_routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forChild(home_routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
