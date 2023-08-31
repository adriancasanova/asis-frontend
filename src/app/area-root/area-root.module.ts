import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AreaRootRoutingModule } from './area-root-routing.module';
import { RootComponent } from './root/root.component';
import { ComponentesGeneralesModule } from '../componentes-generales/componentes-generales.module';


@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    CommonModule,
    AreaRootRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentesGeneralesModule
  ]
})
export class AreaRootModule { }
