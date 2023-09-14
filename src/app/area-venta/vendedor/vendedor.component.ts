import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { HelperServiceService } from 'src/app/componentes-generales/servicios/helper-service.service';
import { SocketHoraService } from 'src/app/servicios/socket-hora.service';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css'],
})
export class VendedorComponent implements OnInit, OnChanges {
  mensaje!: string;
  messageVenta!: string;
   @Input() title: any;
   contador: number = 0;
  constructor(private helperService: HelperServiceService, 
    public socketHoraService: SocketHoraService,
    private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
   console.log(changes)
  }

  ngOnInit(): void {
    this.helperService.customMessage.subscribe(
      (msg) => (this.messageVenta = msg)
    );
  }
  Logueado(route: string) {
    return this.router.url === route;
  }



}
