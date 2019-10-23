import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PiChartComponent } from './pi-chart/pi-chart.component';


const routes: Routes = [
  { path: '', component: ColumnChartComponent },
  { path: 'columnChart', component: ColumnChartComponent },
  { path: 'LineChart', component: LineChartComponent},
  { path: 'PiChart', component: PiChartComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
