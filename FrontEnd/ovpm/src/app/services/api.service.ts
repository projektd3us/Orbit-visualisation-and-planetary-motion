import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly APIUrl = "http://127.0.0.1:8000";

  constructor(private http: HttpClient) { }

  //T service
  plotOrbit(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/plotOrbit');
  }

  stopPlotOrbit(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/stopPlotOrbit');
  }

  plotWithData(simData: any) {
    return this.http.post<any>(this.APIUrl + '/plotWithData/', simData);
  }

  // plotOrbitV2(): Observable<any[]> {
  //   return this.http.get<any>(this.APIUrl + '/plotOrbitV2');
  // }

  // addT(owner: any) {
  //   return this.http.post<any>(this.APIUrl + '/T', owner);
  // }

  // updateT(owner: any) {
  //   return this.http.put<any>(this.APIUrl + '/T', owner);
  // }

  // deleteT(id: any) {
  //   return this.http.delete<any>(this.APIUrl + '/T' + id);
  // }
}
