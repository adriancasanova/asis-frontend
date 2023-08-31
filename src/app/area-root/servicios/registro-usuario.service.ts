import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistroUsuario } from '../../registroUsuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistroUsuarioService {
  private apiUrl: string = 'http://localhost:8080/usuarios';
  constructor(private http: HttpClient) { }

  registroUsuario(user: RegistroUsuario): Observable<any> {       
    return this.http.post(this.apiUrl, user);   
  }
}
