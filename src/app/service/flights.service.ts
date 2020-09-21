import { Injectable } from '@angular/core';
import { Flight } from "../model/flight";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class FlightsService {
  
  private MYFLIGHTS: Flight[] = [];

  constructor(private http: HttpClient) { 
  }

  // to test with service api 
  public getFlightsData() : Observable<Flight[]>{
    let url = "assets/data.json";
    return this.http.get<Flight[]>(url);
  }
}