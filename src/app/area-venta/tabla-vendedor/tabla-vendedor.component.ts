import {
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { AutenticacionService } from 'src/app/area-inicio/servicios/autenticacion.service';
import { HelperServiceService } from 'src/app/componentes-generales/servicios/helper-service.service';
import { TablaRecepcionService } from 'src/app/area-recepcion/servicios/tabla-recepcion.service';
import { TablaRecepcionComponent } from '../../area-recepcion/tabla-recepcion/tabla-recepcion.component';
import { WebSocketService } from 'src/app/servicios/web-socket.service';
import { SocketHoraService } from 'src/app/servicios/socket-hora.service';
import { WebSocketHora } from 'src/app/WebSocketHora';
import { ChatMessageDto } from 'src/app/ChatMessageDto';
import { NgForm } from '@angular/forms';
import { ArrayIngreso } from 'src/app/arrayIngreso';

@Component({
  selector: 'app-tabla-vendedor',
  templateUrl: './tabla-vendedor.component.html',
  styleUrls: ['./tabla-vendedor.component.css'],
  providers: [HelperServiceService],
})
export class TablaVendedorComponent implements OnInit, OnDestroy {
  socketHoras!: any[];
  name!: string;
  Arrayturno!: string;
  turno: any = 0;
  rol!: any;
  message!: string;
  editMessage!: any;
  messageVenta!: string;
  getHoraIngreso!: any;
  usuarioActual!: any;
  @Input() childMessage!: string;
  items$: Observable<any> = new Observable();
  pruebaActualizacion: any;
  posicion!: any;
  currentUserSubject!: BehaviorSubject<any>;
  recepcionData: any;
  loading$!: Observable<any>;
  showAlert: boolean = false;
  fechaactual = new Date().toLocaleTimeString();
  @ViewChild ('sonido') sonido!: ElementRef;
  turnoSinSuma!: any;
  enArray: any;
  todaviaEstaEnLaBase!: boolean;
  newHoraIngreso: ArrayIngreso = new ArrayIngreso();
  nombreBase: any;


  constructor(
    private helperService: HelperServiceService,
    private autenticacionService: AutenticacionService,
    @Optional() public component: TablaRecepcionComponent,
    private routerActive: ActivatedRoute,
    private tablaRecepcionService: TablaRecepcionService,
    public socketHoraService: SocketHoraService,
    private render2: Renderer2,
   // public webSocketService: WebSocketService
  ) {
    this.currentUserSubject = new BehaviorSubject<any>(
      sessionStorage.getItem('currentUser') || '{}'
    );
    this.rol = Object.values(this.currentUserSubject);
    let prueba = this.rol[6];
    this.name = JSON.parse(prueba)[2];

  
  

  }
     
   



  ngOnInit(): void {
    this.getHoraIngresoVendedor();
    this.helperService.customMessage.subscribe(
      (msg) => (this.messageVenta = msg)
    );   
   setInterval(() => {
    this.getHoraIngresoVendedor();
  
   }, 4000);
 


  } 

  ngOnDestroy(): void {
  //  this.webSocketService.closeWebSocket();
  this.socketHoraService.closeWebSocket();
  }


  // Reproduce el audio que esta incrustado en el HTML
  reproducir() {
    const sonidos = this.sonido.nativeElement;   
    this.render2.setAttribute(sonidos, 'src',"assets/sonidos/miAudio.mp3");  
    console.log(sonidos)
}
  /*
  sendMessage(sendForm: NgForm) {
    const chatMessageDto = new ChatMessageDto(sendForm.value.user, sendForm.value.message);
    this.webSocketService.sendMessage(chatMessageDto);
    sendForm.controls['message'].reset();
  } */
  /*  
  sendMessageHora(nombre: string, posicion: any) {
    const webSocketHora = new WebSocketHora(nombre, posicion);
    this.socketHoraService.sendMessage(webSocketHora)   
    console.log(webSocketHora)
  } */


  // Trae las horas de ingreso de la base de datos
  getHoraIngresoVendedor() {
    this.helperService.getHoraIngreso().subscribe((res) => {
      this.getHoraIngreso = res;
     
      let Arrayturno = this.getHoraIngreso;
      
      // Recorre el array con las horas de ingreso y cuando encuentra el mismo nombre que el nombre del vendedor actual se frena
      // y almacena el valor en la variable turno
      for (let i = 0; i <= Arrayturno.length; i++) {     
        
       // this.estaEnArray()
      
        
   
      
        if (Arrayturno[i].nombre == this.name) {
          this.turno = i + 1;
          this.posicion = i;   
          this.todaviaEstaEnLaBase = true; 
         
        } 
     
        // Evalua que el vendedor este en la posicion cero del array
        if (this.posicion === 0 ) {         
          // Comprueba si el vendedor en la posicion cero ya fue eliminado o no
          this.estaEnArray();                  
          
          // Si el usuario ya no esta en la base de datos envia la notoficacion y lo carga de nuevo
          if (this.todaviaEstaEnLaBase == false) {
            
          //  this.postHoraIngreso(this.name);
          this.postHoraIngreso(); 
          
            this.showAlert = true;
            this.reproducir();
            setTimeout(() => {             
              this.showAlert = false;
            }, 10000)
           // Cambia posicion a 1 para evitar que el bucle siga un ciclo mas    
           this.posicion = 1;
          }
          
        } 
    
       
      }
         
    });
  }

  //Consulta si el usuario esta en la base de datos cuando llega a la pocision 0
  estaEnArray() {
    this.helperService.getHoraIngreso().subscribe((res) => {
      this.enArray = res;
     
     
      for (let i = 0; i <= this.enArray.length; i++) {
          if (this.enArray[i].nombre == this.name) {
            console.log("true")
                this.todaviaEstaEnLaBase = true; 
                break
          }  
          if (this.enArray[i].nombre !== this.name) {
            console.log("falso")
            this.todaviaEstaEnLaBase = false; 
            break
      }  
           
          
         
      }
      console.log("funciona")
      })
    }


  // Envia la hora de ingreso a la base de datos
  postHoraIngreso() {
    this.newHoraIngreso.nombre = this.name;
    this.newHoraIngreso.hora = this.fechaactual;   
    this.helperService.postHoraIngreso(this.newHoraIngreso).subscribe((res) => {
      console.log(res);
    });
  }



}
