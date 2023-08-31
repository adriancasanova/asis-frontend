import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperServiceService } from 'src/app/componentes-generales/servicios/helper-service.service';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css'],
})
export class VendedorComponent implements OnInit {
  mensaje!: string;
  messageVenta!: string;

  constructor(private helperService: HelperServiceService, private router: Router) {}

  ngOnInit(): void {
    this.helperService.customMessage.subscribe(
      (msg) => (this.messageVenta = msg)
    );
  }
  Logueado(route: string) {
    return this.router.url === route;
  }
}
