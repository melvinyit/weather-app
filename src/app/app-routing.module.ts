import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';
import { CityComponent } from './components/city/city.component';
import { TessComponent } from './components/tess/tess.component';


const routes: Routes = [
  {path:'',component:WeatherComponent},
  //{path:'city/:cityName'},component:CityComponent},
  {path:'city/:cityName',component:CityComponent},
  {path:'city',component:CityComponent},

  {path:'',component:WeatherComponent,outlet:"scOutlet"},
  {path:'city/:cityName',component:CityComponent,outlet:"scOutlet"},
  {path:'city',component:CityComponent,outlet:"scOutlet"},
  {path:'tess',component:TessComponent,outlet:"scOutlet"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
