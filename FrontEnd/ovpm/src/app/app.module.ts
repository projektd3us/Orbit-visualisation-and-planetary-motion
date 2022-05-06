import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MaterialModule } from './material.module';
import { DiscoverPageComponent } from './components/discover-page/discover-page.component';
import { DiscoveryMethodsComponent } from './components/discovery-methods/discovery-methods.component';
import { SimulationPageComponent } from './components/simulation-page/simulation-page.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    LandingPageComponent,
    DiscoverPageComponent,
    DiscoveryMethodsComponent,
    SimulationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
