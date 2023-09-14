import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AreaVentaRoutingModule } from './area-venta-routing.module';
import { TablaVendedorComponent } from './tabla-vendedor/tabla-vendedor.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { AsideComponent } from '../componente-aside/aside/aside.component';
import { HeaderComponent } from '../componentes-generales/header/header.component';
import { ComponentesGeneralesModule } from '../componentes-generales/componentes-generales.module';
import { AppModule } from '../app.module';
import { ComponenteAsideModule } from '../componente-aside/componente-aside.module';


@NgModule({
  declarations: [
    TablaVendedorComponent,
    VendedorComponent,
    
  ],
  imports: [
    CommonModule,
    AreaVentaRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentesGeneralesModule,
    ComponenteAsideModule
  ]
})
export class AreaVentaModule { }
