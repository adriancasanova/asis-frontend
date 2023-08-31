import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AreaRecepcionRoutingModule } from './area-recepcion-routing.module';
import { FormularioIngresoComponent } from './formulario-ingreso/formulario-ingreso.component';
import { RecepcionComponent } from './recepcion/recepcion.component';
import { TablaRecepcionComponent } from './tabla-recepcion/tabla-recepcion.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from '../componentes-generales/header/header.component';
import { AsideComponent } from '../componente-aside/aside/aside.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { ComponentesGeneralesModule } from '../componentes-generales/componentes-generales.module';


@NgModule({
  declarations: [
    FormularioIngresoComponent,
    RecepcionComponent,
    TablaRecepcionComponent,
    FilterPipe,
    AsideComponent
  ],
  imports: [
    CommonModule,
    AreaRecepcionRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    ComponentesGeneralesModule
  ]
})
export class AreaRecepcionModule { }
