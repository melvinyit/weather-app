import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Weather } from '../models/weather';
import { WeatherService } from '../services/weather.service';
import {constants, Country} from '../models/constants';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  WEATHER_API_KEY = constants.WEATHER_API_KEY;
  imageUrl =  constants.imageUrl;

  model = new Weather("Singapore",0,0,0,"", 0,0);
  city: string;
  country: string;
  imageurl: string;

  countries : Country[] = [];
  /*
  countries = [
    {countryName: 'China', city: 'Beijing'},
    {countryName: 'India', city: 'New Delhi'},
    {countryName: 'Malaysia', city: 'Kuala Lumpur'},
    {countryName: 'Singapore', city: 'Singapore'}
  ]
  */

  imgMapBasedCity = [
    {city: 'Singapore', imageUrl: 'https://www.nea.gov.sg/assets/images/map/base-853.png'},
    {city: 'Kuala Lumpur', imageUrl: 'https://www.researchgate.net/profile/Wee_Boon_Siong/publication/283298104/figure/fig1/AS:614058734673920@1523414419040/Location-of-sampling-site-at-the-Klang-Valley-Source.png'},
    {city: 'Beijing', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Beijing_in_China_%28%2Ball_claims_hatched%29.svg/1200px-Beijing_in_China_%28%2Ball_claims_hatched%29.svg.png'},
    {city: 'New Delhi', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Location_map_India_Delhi_EN.svg/1200px-Location_map_India_Delhi_EN.svg.png'}
  ]

  constructor(private weatherSvc: WeatherService,private router:Router,private actRoute:ActivatedRoute) { }

  ngOnInit() {
    const city = this.actRoute.snapshot.params.cityName;
    console.log("city name",city);
    
    this.countries.push(new Country('China','Beijing'));
    this.countries.push(new Country('India','New Delhi'));
    this.countries.push(new Country('Malaysia','Kuala Lumpur'));
    this.countries.push(new Country('Singapore','Singapore'));
    console.log("country main component",this.countries);
    //this.getWeatherFromAPI(city);
    //subscribe way
    this.actRoute.params.subscribe(routeParams => {
      this.getWeatherFromAPI(routeParams.cityName);
    });
  }

  getWeatherFromAPI(city: string){
    Object.keys(this.imgMapBasedCity).find(value=>{
      if(this.imgMapBasedCity[value].city === city){
        this.imageUrl = this.imgMapBasedCity[value].imageUrl;
      }
    })
    this.weatherSvc.getWeather(city, this.WEATHER_API_KEY).then((result)=>{
      this.model = new Weather(this.model.cityName, result.main.temp,result.main.pressure,result.main.humidity,result.weather[0].description,result.wind.deg,result.wind.speed);
    }).catch((error)=>{
      console.log(error);
    })
  }

  fetchWeatherByCity(event){
    this.getWeatherFromAPI(event.target.value);
  }

  fetchWeatherByCityUsingRoute(event){
    console.log("event value",event.target.value);
    this.router.navigate(['weather',event.target.value]);
  }

}
