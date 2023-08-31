import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { ArrayIngreso } from '../../arrayIngreso';
@Injectable({
  providedIn: 'root',
})
export class HelperServiceService {
  public messageVenta = new BehaviorSubject<string>('');
  public customMessage = this.messageVenta.asObservable();

  constructor(private http: HttpClient) {}

  public changeMessage(msg: string): void {
    this.messageVenta.next(msg);
  }

 // private apiUrl: string = 'https://guttural-impulse-production.up.railway.app/horaIngreso/';
 private apiUrl: string = 'http://localhost:8080/horaIngreso/';
  getHoraIngreso() {
    return this.http.get(this.apiUrl).pipe(
      map((res: any) => {        
        return res;
      })
    );
  }
  deleteHoraIngreso(id: number) {
    return this.http.delete(this.apiUrl + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  postHoraIngreso(arrayIngreso: ArrayIngreso) {
    console.log(arrayIngreso);

    return this.http.post<ArrayIngreso[]>(this.apiUrl, arrayIngreso).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  deleteTablaRecepcion(id: number) {
    return this.http.delete(this.apiUrl + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
