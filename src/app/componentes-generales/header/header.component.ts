import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AutenticacionService } from 'src/app/area-inicio/servicios/autenticacion.service';
import { HelperServiceService } from 'src/app/componentes-generales/servicios/helper-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  rutaEnvio: any;
  @Output() messageEventRuta = new EventEmitter<string>();
  messageVenta: any;
  constructor(private router: Router, private autenticacionService:AutenticacionService, 
    private helperService: HelperServiceService,
    ) { }

  ngOnInit(): void {
  //   this.helperService.customMessage.subscribe(msg => this.messageVenta = msg);
 
  }

  Logueado(route: string) {
    return this.router.url === route;
  }

  enviarRuta() {     
    this.messageEventRuta.emit(this.rutaEnvio)
  }

  desloguear() {
    sessionStorage.removeItem('currentUser');
    this.autenticacionService.currentUserSubject.next(null);
    this.router.navigate(['/login']);   
    this.enviarRuta()
}

}
