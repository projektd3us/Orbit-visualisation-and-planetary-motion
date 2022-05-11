import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {


  readonly APIUrl = "http://127.0.0.1:8000";

  constructor(private http: HttpClient) { }

  // getPlanetDataByName(pl_name: string): Observable<any[]> {
  //   return this.http.get<any>("https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+pl_name,hostname,pl_orbsmax,pl_rade,pl_masse,pl_ratror,st_spectype,st_rad,st_mass,discoverymethod+from+ps+where+pl_name+like+'%"+ pl_name +"%'&format=json");
  // }

  getPlanetDataByName(pl_name: any) {
    return this.http.post<any>(this.APIUrl + '/getTableData/', pl_name);
  }


}
