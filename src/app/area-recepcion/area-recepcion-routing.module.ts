import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecepcionComponent } from './recepcion/recepcion.component';

const routes: Routes = [
  {
    path: '',
    component: RecepcionComponent,
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaRecepcionRoutingModule { }
