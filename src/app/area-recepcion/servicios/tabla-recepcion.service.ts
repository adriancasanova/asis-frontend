import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IngresoPersona } from '../../ingresoPersona';
@Injectable({
  providedIn: 'root',
})
export class TablaRecepcionService {
 // private apiUrl: string = 'https://guttural-impulse-production.up.railway.app/ingresoPersona';
 // private apiUrlHora: string = 'https://guttural-impulse-production.up.railway.app/horaIngreso/';
  
  private apiUrl: string = 'http://localhost:8080/ingresoPersona';
  private apiUrlHora: string = 'http://localhost:8080/horaIngreso/';
  constructor(private http: HttpClient) {}

  getTablaRecepcion() {
    return this.http.get<IngresoPersona[]>(this.apiUrl).pipe(
      map((res: any) => {
           return res;
      })
    );
    
  }

  public getUsers(): Observable<any> {
    const urlEndPoint = 'http://localhost:8080/ingresoPersona';
    return this.http.get<any>(urlEndPoint);
  }

  postTablaRecepcion(ingresoPersona: IngresoPersona) {
    return this.http.post<IngresoPersona[]>(this.apiUrl, ingresoPersona).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updateTablaRecepciont(ingresoPersona: IngresoPersona, id: number) {
    return this.http
      .put<IngresoPersona[]>(this.apiUrl + id, ingresoPersona)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  deleteTablaRecepcion(id: number) {
    return this.http.delete<IngresoPersona[]>(this.apiUrl + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }




}
