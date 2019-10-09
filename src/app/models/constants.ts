import { Weather } from './weather';

export const constants = {
  title : 'weather-app',
  WEATHER_API_KEY : "476e23fe1116f4e69d2a3e68672604e1",
  imageUrl : "https://www.nea.gov.sg/assets/images/map/base-853.png"
}

export let countries = [
    {countryName: 'China', city: 'Beijing'},
    {countryName: 'India', city: 'New Delhi'},
    {countryName: 'Malaysia', city: 'Kuala Lumpur'},
    {countryName: 'Singapore', city: 'Singapore'}
  ]

export let  imgMapBasedCity = [
    {city: 'Singapore', imageUrl: 'https://www.nea.gov.sg/assets/images/map/base-853.png'},
    {city: 'Kuala Lumpur', imageUrl: 'https://www.researchgate.net/profile/Wee_Boon_Siong/publication/283298104/figure/fig1/AS:614058734673920@1523414419040/Location-of-sampling-site-at-the-Klang-Valley-Source.png'},
    {city: 'Beijing', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Beijing_in_China_%28%2Ball_claims_hatched%29.svg/1200px-Beijing_in_China_%28%2Ball_claims_hatched%29.svg.png'},
    {city: 'New Delhi', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Location_map_India_Delhi_EN.svg/1200px-Location_map_India_Delhi_EN.svg.png'}
  ]

  export class Country {
    public countryName:string;
    public city:string;

    constructor(countryName,city){
      this.countryName=countryName;
      this.city=city;
    };
    addCountry(countryName,city){
      this.countryName=countryName;
      this.city=city;
    };
  }

  export class ImageMap {
    public city:string;
    public imageUrl:string;

    constructor(city,imageUrl){
      this.city=city;
      this.imageUrl=imageUrl;
    };
    addImageUrl(city,imageUrl){
      this.city=city;
      this.imageUrl=imageUrl;
    };
  }