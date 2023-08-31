import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RegistroUsuario } from 'src/app/registroUsuario';
import { RegistroUsuarioService } from 'src/app/area-root/servicios/registro-usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent {
loading = false;
formularioRegistro: any;
registroUsuarioModel: RegistroUsuario = new RegistroUsuario();
constructor ( private formBuilder: FormBuilder, private registroUsuario: RegistroUsuarioService) {
  this.formularioRegistro = this.formBuilder.group({
    email: [''],
    password: [''],
    nombre: [''],
    apellido: [''],
    rol: [''],
    dni: [''],
  });
}
registrarUsuario(event: Event) {
  this.loading = true; 
  this.registroUsuarioModel.nombre = this.formularioRegistro.value.nombre;
  this.registroUsuarioModel.apellido = this.formularioRegistro.value.apellido;
  this.registroUsuarioModel.dni = this.formularioRegistro.value.dni;
  this.registroUsuarioModel.email = this.formularioRegistro.value.email;
  this.registroUsuarioModel.password = this.formularioRegistro.value.password;
  this.registroUsuarioModel.rol = this.formularioRegistro.value.rol;
  this.registroUsuario.registroUsuario(this.registroUsuarioModel).subscribe(res =>{
    
   // console.log(res);        
    let ref = document.getElementById('cancel')
    ref?.click();
    this.formularioRegistro.reset();
    alert("registro exitoso. Ya puede iniciarse sesion")
    this.loading = false; 
  })
}

}
