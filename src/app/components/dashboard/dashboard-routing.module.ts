import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { ReportesComponent } from './reportes/reportes.component';
import { SeccionesComponent } from './secciones/secciones.component';

const routes: Routes = [
  { path:'',component:DashboardComponent, children:[
{path:'',component: InicioComponent},
{path:'secciones',component: SeccionesComponent},
{path:'reportes',component: ReportesComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }