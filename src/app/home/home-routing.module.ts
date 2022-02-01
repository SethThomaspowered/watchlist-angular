import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../auth.guard';
import { WatchlistComponent } from './watchlist/watchlist.component';
const home_routes: Routes = [
    {
        path: 'lists',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: 'list/:id',
            component: WatchlistComponent
          }
        ]
    },

];

@NgModule({
  imports: [RouterModule.forChild(home_routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
