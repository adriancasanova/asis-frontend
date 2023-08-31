import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Renderer2,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArrayIngreso } from 'src/app/arrayIngreso';
import { IngresoPersona } from 'src/app/ingresoPersona';
import { HelperServiceService } from 'src/app/componentes-generales/servicios/helper-service.service';

import { SelectService } from 'src/app/area-recepcion/servicios/select.service';
import { TablaRecepcionService } from 'src/app/area-recepcion/servicios/tabla-recepcion.service';
import { TablaRecepcionComponent } from '../tabla-recepcion/tabla-recepcion.component';

@Component({
  selector: 'app-formulario-ingreso',
  templateUrl: './formulario-ingreso.component.html',
  styleUrls: ['./formulario-ingreso.component.css'],
})
export class FormularioIngresoComponent implements OnInit {
  textToChild: any = false;
  message!: string;
  editMessage!: string;

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.message);
  }

  @ViewChild('datosDesdeElPadre') datosDesdeElPadre!: TablaRecepcionComponent;
  
  inputBuscar = '';
  filterPost = '';

  public data: any;

  @ViewChild('prueba') pruebas!: ElementRef;
  //@ViewChild ('eye') eyes!: ElementRef;
  inputBuscarFormulario = '';
  ingresoPersonaModel: IngresoPersona = new IngresoPersona();
  experienciaModelObj: IngresoPersona = new IngresoPersona();
  formValue!: FormGroup;
  formValueAgregar!: FormGroup;
  getHoraIngreso!: any;
  inputvalueNombre = '';
  inputvalueApellido = '';
  inputvalueObservaciones = '';
  tipoDeProspecto = '';
  recepcionData: any;
  public inputContentProspecto: any;
  public inputContentMotivo: any;
  public inputContentDepartamento: any;
  public inputContentProcedencia: any;
  public inputContentEmpleado: any;

  constructor(
    private selectService: SelectService,
    private render2: Renderer2,
    private formBuilder: FormBuilder,
    private tablaRecepcionService: TablaRecepcionService,
    private elem: ElementRef,
    private helperService: HelperServiceService
  ) {
    selectService.traerSelectPersonalizado(['select-personalizado']);
  }
  model: any = {};
  ngOnInit(): void {
    //  this.helperService.customMessage.subscribe(msg => this.message = msg);
    this.formValueAgregar = this.formBuilder.group({
      tipoDeProspecto: [''],
      nombreApellido: [''],
      dni: [''],
      nroContacto: [''],
      motivo: [''],
      departamento: [''],
      procedencia: [''],
      empleado: [''],
      observaciones: [''],
    });

    this.getHoraIngresoVendedor();
   
  }

  getHoraIngresoVendedor() {
    this.helperService.getHoraIngreso().subscribe((res) => {
      this.getHoraIngreso = res;
    });
  }

  mayus(e: any) {
    console.log(e);
    e.value = e.value.UpperCasePipe;
  }

  postIngresoDetails() {
    this.ingresoPersonaModel.tipoDeProspecto = this.inputContentProspecto;
    this.ingresoPersonaModel.nombreApellido =
      this.formValueAgregar.value.nombreApellido;
    this.ingresoPersonaModel.dni = this.formValueAgregar.value.dni;
    this.ingresoPersonaModel.nroContacto =
      this.formValueAgregar.value.nroContacto;
    this.ingresoPersonaModel.motivo = this.inputContentMotivo;
    this.ingresoPersonaModel.departamento = this.inputContentDepartamento;
    this.ingresoPersonaModel.procedencia = this.inputContentProcedencia;
    this.ingresoPersonaModel.empleado = this.inputContentEmpleado;
    this.ingresoPersonaModel.observaciones =
      this.formValueAgregar.value.observaciones;

    this.tablaRecepcionService
      .postTablaRecepcion(this.ingresoPersonaModel)
      .subscribe((res) => {
        this.textToChild = true;

        //limpia los formularios despues del envio
        this.formValueAgregar.reset();
        this.vaciarSelect();
        this.sendMessage();
        this.getRecepcionPersona();
      });
  }

  vaciarSelect() {
    const newContent = '';   
    const element = this.elem.nativeElement.querySelector('.tituloProspecto') 
    const element1 = this.elem.nativeElement.querySelector ('.titulo') 
    const element2 = this.elem.nativeElement.querySelector('.tituloDepartamento')
    const element3 = this.elem.nativeElement.querySelector('.tituloProcedencia') 
    const element4 = this.elem.nativeElement.querySelector('.tituloEmpleado'); 
    this.render2.setProperty(element, 'innerHTML', newContent);
    this.render2.setProperty(element1, 'innerHTML', newContent);
    this.render2.setProperty(element2, 'innerHTML', newContent);
    this.render2.setProperty(element3, 'innerHTML', newContent);
    this.render2.setProperty(element4, 'innerHTML', newContent);
    this.formValueAgregar.reset();
  }

  cancelar() {
    const newContent = '';   
    const element = this.elem.nativeElement.querySelector('.tituloProspecto') 
    const element1 = this.elem.nativeElement.querySelector ('.titulo') 
    const element2 = this.elem.nativeElement.querySelector('.tituloDepartamento')
    const element3 = this.elem.nativeElement.querySelector('.tituloProcedencia') 
    const element4 = this.elem.nativeElement.querySelector('.tituloEmpleado'); 
    this.render2.setProperty(element, 'innerHTML', newContent);
    this.render2.setProperty(element1, 'innerHTML', newContent);
    this.render2.setProperty(element2, 'innerHTML', newContent);
    this.render2.setProperty(element3, 'innerHTML', newContent);
    this.render2.setProperty(element4, 'innerHTML', newContent);
    this.formValueAgregar.reset();
  }

  getRecepcionPersona() {
    this.tablaRecepcionService.getTablaRecepcion().subscribe((res: any) => {
      this.recepcionData = res;
    });
  }

  @ViewChild('opcionesProspectoListen', { static: false })
  divOpcionesProspectoListen!: ElementRef;
  @ViewChild('opcionesListen', { static: false })
  divOpcionesListen!: ElementRef;
  @ViewChild('opcionesDepartamentoListen', { static: false })
  divOpcionesDepartamentoListen!: ElementRef;
  @ViewChild('opcionesProcedenciaListen', { static: false })
  divOpcionesProcedenciaListen!: ElementRef;
  @ViewChild('opcionesEmpleadoListen', { static: false })
  divOpcionesEmpleadoListen!: ElementRef;
  clicklistenerProspecto: any;
  clicklistenerMotivo: any;
  clicklistenerDepartamento: any;
  clicklistenerProcedencia: any;
  clicklistenerEmpleado: any;

  ngAfterViewInit() {
    // Escuchando el select personalizado de tipo de prospecto
    this.clicklistenerProspecto = this.render2.listen(
      this.divOpcionesProspectoListen.nativeElement,
      'click',
      (evt) => {
        this.inputContentProspecto =
          document.querySelector('.tituloProspecto')?.textContent;
      }
    );
    // Escuchando el select personalizado de motivo
    this.clicklistenerMotivo = this.render2.listen(
      this.divOpcionesListen.nativeElement,
      'click',
      (evt) => {
        this.inputContentMotivo =
          document.querySelector('.titulo')?.textContent;
      }
    );
    // Escuchando el select personalizado de departamento
    this.clicklistenerDepartamento = this.render2.listen(
      this.divOpcionesDepartamentoListen.nativeElement,
      'click',
      (evt) => {
        this.inputContentDepartamento = document.querySelector(
          '.tituloDepartamento'
        )?.textContent;
      }
    );
    // Escuchando el select personalizado de procedencia
    this.clicklistenerProcedencia = this.render2.listen(
      this.divOpcionesProcedenciaListen.nativeElement,
      'click',
      (evt) => {
        this.inputContentProcedencia =
          document.querySelector('.tituloProcedencia')?.textContent;
      }
    );
    // Escuchando el select personalizado de empleado
    this.clicklistenerEmpleado = this.render2.listen(
      this.divOpcionesEmpleadoListen.nativeElement,
      'click',
      (evt) => {
        this.inputContentEmpleado =
          document.querySelector('.tituloEmpleado')?.textContent;
      }
    );
  }
  ngOnDestroy() {
    this.clicklistenerProspecto.unsubscribe();
    this.clicklistenerMotivo.unsubscribe();
    this.clicklistenerDepartamento.unsubscribe();
    this.clicklistenerProcedencia.unsubscribe();
    this.clicklistenerEmpleado.unsubscribe();
  }
}
