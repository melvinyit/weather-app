import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main.component';
import { AddCityComponent } from './components/add-city.component';
import { WeatherComponent } from './components/weather.component';


const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'main',component:MainComponent},
  {path:'add',component:AddCityComponent},
  {path:'weather/:cityName',component:WeatherComponent},
  {path:'**',redirectTo:'/',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
