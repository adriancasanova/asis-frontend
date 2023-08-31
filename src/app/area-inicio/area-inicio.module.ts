import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AreaInicioRoutingModule } from './area-inicio-routing.module';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from '../componentes-generales/header/header.component';
import { ComponentesGeneralesModule } from '../componentes-generales/componentes-generales.module';


@NgModule({
  declarations: [
    LoginComponent,
    InicioComponent,    
  ],
  imports: [
    CommonModule,
    AreaInicioRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentesGeneralesModule
  ]
})
export class AreaInicioModule { }
