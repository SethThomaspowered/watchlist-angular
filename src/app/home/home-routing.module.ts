import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { AuthGuard } from '../auth.guard';
const home_routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [ //create the sub sections (children) for this route
            {
                path: 'watchlist',
                component: WatchlistComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(home_routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
