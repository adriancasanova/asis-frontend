import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { IngresoPersona } from 'src/app/ingresoPersona';
import { AutenticacionService } from 'src/app/area-inicio/servicios/autenticacion.service';
import { TablaRecepcionService } from 'src/app/area-recepcion/servicios/tabla-recepcion.service';
@Component({
  selector: 'app-recepcion',
  templateUrl: './recepcion.component.html',
  styleUrls: ['./recepcion.component.css'],
})
export class RecepcionComponent implements OnInit {
  filterPost!: any;
  userData!: any;
  recepcionData: any;
  constructor(
    private autenticacionService: AutenticacionService,
    private tablaRecepcionService: TablaRecepcionService,
    private ruta: Router
  ) {}

  ngOnInit(): void {
    this.getRecepcionPersona();
  }

  rutaEnvio!: any;

  actualizarRuta(event: any) {
    this.ruta.navigate(['/', 'login']);
    window.location.href = '/login';
  }
  getRecepcionPersona() {
    this.tablaRecepcionService.getTablaRecepcion().subscribe((res: any) => {
      this.recepcionData = res;
    });
  }

  rutaActual(ruta: string) {
    return this.ruta.url === ruta;
  }
}
