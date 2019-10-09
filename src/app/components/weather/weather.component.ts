import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather';
import { WeatherService } from 'src/app/services/weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  WEATHER_API_KEY = "476e23fe1116f4e69d2a3e68672604e1";
  model = new Weather("Singapore",0,0,0,"", 0,0);
  imageUrl = "https://www.nea.gov.sg/assets/images/map/base-853.png";
  city: string;
  country: string;
  imageurl: string;

  countries = [
    {countryName: 'China', city: 'Beijing'},
    {countryName: 'India', city: 'New Delhi'},
    {countryName: 'Malaysia', city: 'Kuala Lumpur'},
    {countryName: 'Singapore', city: 'Singapore'}
  ]

  imgMapBasedCity = [
    {city: 'Singapore', imageUrl: 'https://www.nea.gov.sg/assets/images/map/base-853.png'},
    {city: 'Kuala Lumpur', imageUrl: 'https://www.researchgate.net/profile/Wee_Boon_Siong/publication/283298104/figure/fig1/AS:614058734673920@1523414419040/Location-of-sampling-site-at-the-Klang-Valley-Source.png'},
    {city: 'Beijing', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Beijing_in_China_%28%2Ball_claims_hatched%29.svg/1200px-Beijing_in_China_%28%2Ball_claims_hatched%29.svg.png'},
    {city: 'New Delhi', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Location_map_India_Delhi_EN.svg/1200px-Location_map_India_Delhi_EN.svg.png'}
  ]

  constructor(private weatherSvc: WeatherService,private router: Router){}

  ngOnInit(){
    this.getWeatherFromAPI(this.model.cityName);
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
    this.router.navigate([{ outlets: { primary: ['city'],scOutlet: ['city'] }}]);
  }

}
