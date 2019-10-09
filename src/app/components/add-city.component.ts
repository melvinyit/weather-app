import { Component, OnInit } from '@angular/core';
import { City } from '../models/city';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {

  public data:City = {
    city:'',
    country:'',
    imageurl:''
  };

  constructor(private router:Router) { }

  ngOnInit() {
  }

  addCityToModel(){
    console.log("add city value");
    console.log("city",this.data.city);
    console.log("country",this.data.country);
    console.log("image",this.data.imageurl);
  }

  back(){
    this.router.navigate(['']);
  }

  /*
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
    */

}
