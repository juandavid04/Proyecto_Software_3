import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReclutadorComponent } from './components/reclutador/reclutador.component';
import { VacantesComponent } from './components/vacantes/vacantes.component';
import { TrabajosComponent } from './components/trabajos/trabajos.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'empleos',
    component: TrabajosComponent
  },
  {
    path: 'reclutador',
    component: ReclutadorComponent,
    children: [
      {
        path: 'vacantes',
        component: VacantesComponent
      },
      {
        path: 'solicitudes',
        component: SolicitudesComponent
      }
    ]
  },
  {
    path: 'reclutador/vacantes',
    component: VacantesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
