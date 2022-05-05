import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.less']
})
export class TopMenuComponent implements OnInit {

  pageRoutes = [{ route: "", name: "Home"}];
  activeLink = this.pageRoutes[0].route;

  constructor() { }

  ngOnInit(): void {
  }

}
