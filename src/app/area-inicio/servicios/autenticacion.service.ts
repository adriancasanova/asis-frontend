import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../../login';
@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
 // url = 'https://guttural-impulse-production.up.railway.app/login';
 // urlGetUsuarios = 'https://guttural-impulse-production.up.railway.app/usuarioGet';
  
  url = 'http://localhost:8080/login/';
  urlGetUsuarios = 'http://localhost:8080/usuarioGet';

  currentUserSubject: BehaviorSubject<any>;

  headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(
      sessionStorage.getItem('currentUser') || '{}'
    );

    this.headers.append(
      'Authorization',
      'Bearer' + sessionStorage.getItem('currentUser.token')
    );
  }
  iniciarSesion(credenciales: any): Observable<any> {
    return this.http
      .post(this.url, credenciales /*, { responseType: 'text' }*/)
      .pipe(
        map((data) => {
          sessionStorage.setItem('currentUser', JSON.stringify(data));

          this.currentUserSubject.next(data);

          return data;
        })
      );
  }

  get UsuarioAutenticado() {
    return this.currentUserSubject.value;
  }

  //traer usuario para tomar el rol para
  getUsuario() {
    return this.http.get<Usuario[]>(this.urlGetUsuarios).pipe(
      map((res: any) => {
        return res;
      })
    );
  }



}
