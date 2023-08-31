import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SelectAsideService } from '../componente-aside/servicios/select-aside.service';


@NgModule({
  declarations: [
    HeaderComponent,
  
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
 
  ],
  providers: [   
    SelectAsideService,
  
  ],
})
export class ComponentesGeneralesModule { }
