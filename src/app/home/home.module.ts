import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { RandomColorDirective } from './random-color.directive';


@NgModule({
  declarations: [
    SideNavComponent,
    WatchlistComponent,
    HomeComponent,
    RandomColorDirective
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    NgbModule,
    SharedModule
  ]
})
export class HomeModule { }
