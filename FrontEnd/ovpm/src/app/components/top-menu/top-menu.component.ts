import { Component, OnInit, Output } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { Router, Event } from '@angular/router'; 

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.less']
})
export class TopMenuComponent implements OnInit {

  pageRoutes = [
    { route: "home", name: "Home"},
    { route: "discover", name: "Discover"},
    { route: "simulate", name: "Simulate"}
  ];
  activeLink = this.pageRoutes[0].route;

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      this.activeLink = this.router.url.split("/")[1];
    });
  }

}
