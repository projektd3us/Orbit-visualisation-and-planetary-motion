import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { GlobalsService } from 'src/app/services/globals.service';
import { FormBuilder } from '@angular/forms';
import { NasaService } from 'src/app/services/nasa.service';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-simulation-page',
  templateUrl: './simulation-page.component.html',
  styleUrls: ['./simulation-page.component.less']
})
export class SimulationPageComponent implements OnInit, AfterViewInit {

  isSimRunning = false; // sim running logic
  discoveryMethods = this.globals.discoveryMethods; // get from globals

  displayedColumns: string[] = ['pl_name', 'hostname', 'discoverymethod', 'disc_pubdate','pl_masse', 'pl_dens'];
  dataSource = new MatTableDataSource<any>([]);
  clickedRows = new Set<any>();

  currentlySelectedPlanet = {
    pl_name: 'Select a planet',
    pl_masse: 0,
    pl_dens: 0,
    hostname: "Host",
    discoverymethod: "Method",
    disc_pubdate: "date"
  }

  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private globals:GlobalsService, private formBuilder: FormBuilder, private nasa: NasaService, private api:ApiService ) { }

  planetForm = this.formBuilder.group({
    pl_name: [''],
    disc_method: ['']
  });

  ngOnInit(): void {
  }



  onSubmit(){
    this.nasa.getPlanetDataByName({pl_name: this.planetForm.value.pl_name}).subscribe( resp => {

      this.dataSource.data = resp;
    });
  }

  runSimulation(){
    this.isSimRunning = true;
    // this.api.plotOrbitV1().subscribe( resp => {
    //   console.log(resp);
    // });
    this.api.plotWithData(this.currentlySelectedPlanet).subscribe( resp => {
      console.log(resp);
    });
  }

  stopSimulation(){
    this.isSimRunning = false;
    this.api.stopPlotOrbitV1().subscribe( resp => {
      console.log(resp);
    });
  }

  planetSelected(row: any){
    this.currentlySelectedPlanet.pl_name = row.pl_name;
    this.currentlySelectedPlanet.pl_masse = row.pl_masse;
    this.currentlySelectedPlanet.pl_dens = row.pl_dens;
    this.currentlySelectedPlanet.discoverymethod = row.discoverymethod;
    this.currentlySelectedPlanet.hostname = row.hostname;
    this.currentlySelectedPlanet.disc_pubdate = row.disc_pubdate;
  }

}
