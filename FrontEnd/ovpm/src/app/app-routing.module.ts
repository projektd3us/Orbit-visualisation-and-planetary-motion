import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverPageComponent } from './components/discover-page/discover-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SimulationPageComponent } from './components/simulation-page/simulation-page.component';

const routes: Routes = [

  //routes
  { path: 'home', component: LandingPageComponent },
  { path: 'discover', component: DiscoverPageComponent },
  { path: 'simulate', component: SimulationPageComponent },

  //defaults
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
