import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecepcionComponent } from './area-recepcion/recepcion/recepcion.component';
import { InterceptorService } from './area-inicio/servicios/interceptor.service';
import { SelectService } from './area-recepcion/servicios/select.service';
import { SelectAsideService } from './componente-aside/servicios/select-aside.service';
import { FilterPipe } from './pipes/filter.pipe';
import { VendedorComponent } from './area-venta/vendedor/vendedor.component';
import { HelperServiceService } from './componentes-generales/servicios/helper-service.service';
import { ActualizadorDirective } from './directivas/actualizador.directive';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {NgxPaginationModule} from 'ngx-pagination';
import { AsideComponent } from './componente-aside/aside/aside.component';
import { HeaderComponent } from './componentes-generales/header/header.component';
import { ComponentesGeneralesModule } from './componentes-generales/componentes-generales.module';

@NgModule({
  declarations: [
    AppComponent,
    ActualizadorDirective,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({name: 'TEST'}),
    NgxPaginationModule,
    ComponentesGeneralesModule
  ],
  exports: [
   
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    SelectService,
    SelectAsideService,
    HelperServiceService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
