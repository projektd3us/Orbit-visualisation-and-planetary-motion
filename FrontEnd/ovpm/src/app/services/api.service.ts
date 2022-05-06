import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly APIUrl = "http://localhost:5000/api";

  constructor(private http: HttpClient) { }

  //T service
  getT(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/T');
  }

  addT(owner: any) {
    return this.http.post<any>(this.APIUrl + '/T', owner);
  }

  updateT(owner: any) {
    return this.http.put<any>(this.APIUrl + '/T', owner);
  }

  deleteT(id: any) {
    return this.http.delete<any>(this.APIUrl + '/T' + id);
  }
}
