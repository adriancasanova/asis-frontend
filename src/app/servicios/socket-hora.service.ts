import { Injectable } from '@angular/core';
import { WebSocketHora } from '../WebSocketHora';
import { Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SocketHoraService {
  webSocket!: WebSocket; 
  private apiUrl: string = 'http://localhost:8080/horaIngreso/';
//  webSocketHora: Observable <WebSocketHora[]> = [];
//webSocket!: WebSocket;
//chatMessages: ChatMessageDto[] = [];
webSocketObservable: Observable<WebSocketHora[]> = new Observable;
webSocketHora: WebSocketHora[] = [];

  constructor(private http: HttpClient) {
    this.webSocket = new WebSocket('ws://localhost:8080/contador')
   }

  public openWebSocket() {
    this.webSocket.onopen = (event) => {
      console.log("open" + event)
    }

    this.webSocket.onmessage = (event) => {
      const webSocketHora = JSON.parse(event.data);
      this.webSocketHora.push(webSocketHora)
      this.webSocketObservable = webSocketHora;
    }

    this.webSocket.onclose = (event) => {
      console.log("close" + event)
    }
  }

  public sendMessage(webSocketHora: WebSocketHora) {
    this.webSocket.send(JSON.stringify(webSocketHora))
  }

  public closeWebSocket() {
    this.webSocket.close();
  } 


 
 


}