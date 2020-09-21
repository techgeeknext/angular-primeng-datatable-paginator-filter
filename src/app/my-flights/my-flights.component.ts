import { Component, OnInit } from '@angular/core';

import {Flight} from '../model/flight';
import { FlightsService } from 'src/app/service/flights.service';

@Component({
  selector: 'app-my-flights',
  templateUrl: './my-flights.component.html',
  styleUrls: ['./my-flights.component.scss']
})
export class MyFlightsComponent implements OnInit {
  public flights : Flight[];
  days: any[];

  constructor(private flightService: FlightsService) {
    this.getFlightsData();

  }

  ngOnInit() {

    this.days = [
      {label: 'Monday', value: 'monday'},
      {label: 'Tuesday', value: 'tuesday'},
      {label: 'Wednesday', value: 'wednesday'},
      {label: 'Thursday', value: 'thursday'},
      {label: 'Friday', value: 'friday'},
      {label: 'Saturday', value: 'saturday'},
      {label: 'Sunday', value: 'sunday'}
  ]
    
  }

  // get the data from backend service api
  private getFlightsData() {
    this.flightService.getFlightsData().subscribe(data => {
      this.flights = data;
    });
  }
}
