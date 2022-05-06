import { Component, OnInit } from '@angular/core';
import { GlobalsService } from 'src/app/services/globals.service';

@Component({
  selector: 'app-discover-page',
  templateUrl: './discover-page.component.html',
  styleUrls: ['./discover-page.component.less']
})
export class DiscoverPageComponent implements OnInit {
  
  discoveryMethods = this.globals.discoveryMethods;

  constructor(private globals:GlobalsService ) { }

  ngOnInit(): void {
  }

}
