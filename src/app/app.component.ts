import { Component, OnInit, Inject } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { Weather } from './models/weather';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { City } from './models/city';
import { Router } from '@angular/router';
import { Country } from './models/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public countries : Country[] = [];

  constructor(private weatherSvc: WeatherService, private router:Router,
    public dialog: MatDialog){}

  ngOnInit(){
    //this.getWeatherFromAPI(this.model.cityName);
    //this.countries.push(new Country('China','Beijing'));
    //this.countries.push(new Country('India','New Delhi'));
    //this.countries.push(new Country('Malaysia','Kuala Lumpur'));
    //this.countries.push(new Country('Singapore','Singapore'));
    console.log("country app component",this.countries);
  }
  addCityUsingRoute(){
    this.router.navigate(['add']);
  }
  /*
  title = 'weather-app';
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
  */
  /*
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

  addCity(): void {
    const dialogRef = this.dialog.open(AddCityDialog, {
      width: '250px',
      data: {city: this.city, country: this.country, imageurl: this.imageurl}
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(typeof result !== 'undefined'){
        this.countries.push({countryName: result.country, city: result.city });
        this.countries.sort((a, b) => (a.countryName > b.countryName) ? 1 : -1)
        this.imgMapBasedCity.push({city: result.city, imageUrl: result.imageurl });
      }
    });
  }
  */

  
}
/*
@Component({
  selector: 'add-city',
  templateUrl: 'addcity.html',
})
export class AddCityDialog {

  constructor(
    public dialogRef: MatDialogRef<AddCityDialog>,
    @Inject(MAT_DIALOG_DATA) public data: City) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  
}
*/

