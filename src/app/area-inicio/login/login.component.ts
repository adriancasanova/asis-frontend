import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AutenticacionService } from 'src/app/area-inicio/servicios/autenticacion.service';
import { HelperServiceService } from 'src/app/componentes-generales/servicios/helper-service.service';
import { ArrayIngreso } from 'src/app/arrayIngreso';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  fechaactual = new Date().toLocaleTimeString();
  userData!: any;
  arrayHoraDeIngresoVendedor: any = [].sort();

  nombreVendedor!: any;
  private credenciales!: string;
  public loading!: boolean;
  public loginForm!: FormGroup;
  public rol!: any;
  rolDos: ArrayIngreso = new ArrayIngreso();
  nombre!: any;
  mensaje!: string;
  editMessage!: string;
  getHoraIngreso!: any;
  loginIncorrecto: boolean = false;
  @ViewChild('alerta') pruebas!: ElementRef;
  @ViewChild('crearElemento') eyes!: ElementRef;
  elUsuarioEsta: boolean = false;
  prueba: any = "";
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private ruta: Router,
    private autenticacionService: AutenticacionService,
    private render2: Renderer2,
    private helperService: HelperServiceService
  ) {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  ngOnInit(): void {
    // this.helperService.customMessage.subscribe(msg => this.mensaje = msg);
   
  }

  get Email() {
    return this.loginForm.get('email');
  }

  get Password() {
    return this.loginForm.get('password');
  }

  login(event: Event) {
    this.loading = true;
    event.preventDefault;
    this.autenticacionService
      .iniciarSesion(this.loginForm.value)
      .subscribe((data) => {
     
        // Destructura el objeto data y lo almacena en rol
        this.rol = Object.values(data);
       // Recorre el primer elemento de la lista y captura el rol (recepcionista, vendedor, etc)
        for (let i = 0; i < 1; i++) {
          if (this.rol[0] === 'recepcionista') {
            console.log("El rol en la posicion cero es un recepcionista----->" + this.rol[0])
            this.ruta.navigate(['/recepcion']);
          }

          if (this.rol[0] === 'root') {           
            this.ruta.navigate(['/root']);
          }
          // Consulta si el vendedor que se loguea esta en la base de datos que captura la hora de ingreso y si es asi no almacena la hora a la que ingreso
         if (this.rol[0] === 'vendedor') {
            // this.ruta.navigate(['/venta', this.rol[2]]);
            this.ruta.navigate(['/venta']);   
            this.getHoraIngresoVendedor()
            this.horaLogueo(this.fechaactual);              
            this.nombre = this.rol[2];     
            this.estaEnLaBaseDeDatos(this.rol[2])

        
            
          }

        }
        if (this.credenciales === null) {
          this.loginIncorrecto = true;
          this.loading = false;
        }
        
      });

 
   
  }


  // Determina si el usuario que se loguea ya esta enla base de datos que almecena los horarios de ingreso 
  // Esto es para evitar que el usuario ingrese varias veces para aparecer varias veces en la base de datos
  estaEnLaBaseDeDatos (rol: any) {
    this.helperService.getHoraIngreso().subscribe((res) => {
      this.getHoraIngreso = res;         
      for (let i = 0; i <= this.getHoraIngreso.length; i++) {      
        // Consulta si el usuario que se esta logueando es el array que devuelve la consulta       
         if (rol == this.getHoraIngreso[i]?.nombre) {                    
          this.elUsuarioEsta = true;                   
          break
        } else {     
          console.log("el usuario esta " + this.elUsuarioEsta) 
        }
        
  
        }
        // Si el usuario no esta en la base de datos y es vendedor entonces almacena la hora de ingreso
        if (this.elUsuarioEsta == false && this.rol[0] == 'vendedor') {              
          this.postHoraIngreso();
          this.getHoraIngresoVendedor()
        }

    });



    
  }

 

  postHoraIngreso() {
    this.rolDos.nombre = this.nombre;
    this.rolDos.hora = this.fechaactual;
   // console.log(this.rolDos);
    this.helperService.postHoraIngreso(this.rolDos).subscribe((res) => {
      console.log(res);
    });
  }

  horaLogueo(fecha: any) {
    console.log(fecha);
  }


  getHoraIngresoVendedor() {
    this.helperService.getHoraIngreso().subscribe((res) => {
      this.getHoraIngreso = res;
    });
  }

 


}
