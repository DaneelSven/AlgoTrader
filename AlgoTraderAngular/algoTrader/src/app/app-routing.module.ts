import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApexChartComponent } from './Components/apex-chart/apex-chart.component';

const routes: Routes = [{
  path: '', component: ApexChartComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
