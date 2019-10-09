import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const city = this.activeRoute.snapshot.params.cityName || "empty";
    console.log("city component activted",city);
  }

}
