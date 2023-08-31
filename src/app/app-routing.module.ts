import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './area-inicio/inicio/inicio.component';
import { LoginComponent } from './area-inicio/login/login.component';
import { RecepcionComponent } from './area-recepcion/recepcion/recepcion.component';
import { VendedorComponent } from './area-venta/vendedor/vendedor.component';
import { GuardGuard } from './guard.guard';
import { RootComponent } from './area-root/root/root.component';

const routes: Routes = [
   
 // { path: 'login', component: InicioComponent },
 //  { path: 'recepcion', component: RecepcionComponent/*, canActivate:[GuardGuard]*/},
 // { path: 'venta/:id', component: VendedorComponent },
// { path: 'venta', component: VendedorComponent },
   { path: '', redirectTo: 'login', pathMatch: 'full' },
//  { path: 'root',  component: RootComponent }, 
  {
    path: 'login', loadChildren: () => 
    import ('./area-inicio/area-inicio.module').then(m => m.AreaInicioModule)
  },
  {
    path: 'recepcion', loadChildren: () => 
    import ('./area-recepcion/area-recepcion.module').then(m => m.AreaRecepcionModule)
  },
  {
    path: 'venta', loadChildren: () => 
    import ('./area-venta/area-venta.module').then(m => m.AreaVentaModule)
  },
  {
    path: 'root', loadChildren: () => 
    import ('./area-root/area-root.module').then(m => m.AreaRootModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
