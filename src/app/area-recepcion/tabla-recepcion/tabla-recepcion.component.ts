import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { ChatMessageDto } from 'src/app/ChatMessageDto';
import { WebSocketHora } from 'src/app/WebSocketHora';
import { IngresoPersona } from 'src/app/ingresoPersona';
import { AutenticacionService } from 'src/app/area-inicio/servicios/autenticacion.service';
import { HelperServiceService } from 'src/app/componentes-generales/servicios/helper-service.service';
import { SocketHoraService } from 'src/app/servicios/socket-hora.service';
import { TablaRecepcionService } from 'src/app/area-recepcion/servicios/tabla-recepcion.service';
import { WebSocketService } from 'src/app/servicios/web-socket.service';


@Component({
  selector: 'app-tabla-recepcion',
  templateUrl: './tabla-recepcion.component.html',
  styleUrls: ['./tabla-recepcion.component.css'],
})
export class TablaRecepcionComponent implements OnInit, OnDestroy {
  public page!: number;
  messageVenta!: string;
  editMessage!: any;
  @Input() textFromParent!: any;
  getHoraIngreso!: any;
  message!: string;
  numeroEnTabla: number = 0;
  query = '';

  items$: Observable<any> = new Observable();
  turno: any;
  posicion: any;
  //@Input() books: ReadonlyArray<IngresoPersona> = [];
  // books$ = this.store.select(selectBooks);

  receiveMessage(event: any) {
    console.log('receiveMessage')
    this.getRecepcionPersona();
    this.message = event;
  }
  users: any = [];
  ingresoPersona!: IngresoPersona;
  inputBuscar = '';
  filterPost = '';
  ingresoPersonaModel: IngresoPersona = new IngresoPersona();
  formValue!: FormGroup;
  formValueAgregar!: FormGroup;
  recepcionData!: any;
  userData: any;
  //loading$: Observable<void> = new Observable();
  @Output() add = new EventEmitter<string>();
  loading$: Observable<any> = new  Observable()
  @Input() data: any;
  constructor(
    private tablaRecepcionService: TablaRecepcionService,
    private autenticacionService: AutenticacionService,
    private formBuilder: FormBuilder,
    private render2: Renderer2,
    private helperService: HelperServiceService,
    private router: Router,
  //  public webSocketService: WebSocketService,
    public socketHoraService: SocketHoraService
   
  ) {
   // this.posicion = this.socketHoraService.webSocketHora;
   // console.log("prueba" + JSON.stringify(this.socketHoraService.webSocketHora.values))
  }



  ngOnInit(): void {
    this.helperService.customMessage.subscribe(
      (msg) => (this.messageVenta = msg)
    );
    this.getRecepcionPersona();
    this.getHoraIngresoVendedor();
 
  /*
    this.store.dispatch(loadItems()) //TODO🔴
    */
   // this.webSocketService.openWebSocket();
   this.socketHoraService.openWebSocket();


  
  }



  ngOnDestroy(): void {
   // this.webSocketService.closeWebSocket();
   this.socketHoraService.closeWebSocket();
  } 
/*
  sendMessage(sendForm: NgForm) {
    const chatMessageDto = new ChatMessageDto(sendForm.value.user, sendForm.value.message);
    this.webSocketService.sendMessage(chatMessageDto);
    sendForm.controls['message'].reset();
  } */
 
  
  sendMessageHora(nombre: string, posicion: any) {
    const webSocketHora = new WebSocketHora(nombre, posicion);
    this.socketHoraService.sendMessage(webSocketHora)   
   // console.log(webSocketHora)
  } 


 
  getHoraIngresoVendedor() {
    this.helperService.getHoraIngreso().subscribe((res) => {
      this.getHoraIngreso = res;
    });
  }

  notificarTurnoVendedor() {
    
    let array = this.getHoraIngreso;
    for (let i = 0; i < array.length; i++) {
    //  console.log(array[i]);
     // console.log(array);
   //   this.sendMessageHora();
      this.editMessage = array[i];
    // this.changeMessage();
        this.helperService.deleteHoraIngreso(array[i].id).subscribe(res => {
              this.getHoraIngresoVendedor();                   
              
            }) 
           
          //  for (let i = 0; i < this.editMessage.length; i++) {
              
            //  if (this.getHoraIngreso[i].nombre == this.editMessage.nombre) {
            //    this.turno = i + 1;
               // this.posicion = this.turno;
             //   this.sendMessageHora(array[i].nombre, this.turno)
              //  console.log('prueba de tabla recepcion' + this.turno)
             // } 
          //  }  
    
      break;
    }


    this.getHoraIngresoVendedor();      
    this.getRecepcionPersona();
    window.location.reload() 
  }

  changeMessage() {
    this.helperService.changeMessage(this.editMessage);
  } 

  getRecepcionPersona() {
    this.tablaRecepcionService.getTablaRecepcion().subscribe((res: any) => {
       this.recepcionData = res;
      //  this.store.dispatch(loadedItems({items: res}))
    //  this.recepcionData = this.store.dispatch(BooksApiActions.retrievedBookList (_state: res)  );
      //this.recepcionData = res;
      
    
      
    });  } 

  @ViewChild('actualizacionDeEstado', { static: false })
  divActualizacionDeEstado!: ElementRef;

  clicklistenerProspecto: any;

  public inputContentProspecto: any;

  ngAfterViewInit() {
    // Escuchando el select personalizado de tipo de prospecto
    this.clicklistenerProspecto = this.render2.listen(
      this.divActualizacionDeEstado.nativeElement,
      'change',
      (evt) => {
        this.inputContentProspecto = document.querySelector('.algo');
        console.log('el valor es:' + this.inputContentProspecto.value);
        this.inputContentProspecto.blur();
      }
    );
  }
}
