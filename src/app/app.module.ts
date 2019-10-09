import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherService } from './services/weather.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.modules';
import { AddCityDialog } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { CityComponent } from './components/city/city.component';
import { AppRoutingModule } from './app-routing.module';
import { TessComponent } from './components/tess/tess.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCityDialog,
    WeatherComponent,
    CityComponent,
    TessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [ WeatherService ],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent, AddCityDialog]
})
export class AppModule { }
