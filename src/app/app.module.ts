import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PiChartComponent } from './pi-chart/pi-chart.component';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { NavComponentComponent } from './nav-component/nav-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PiChartComponent,
    ColumnChartComponent,
    LineChartComponent,
    NavComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
