import { Injectable } from '@angular/core';
import { WebSocketHora } from '../WebSocketHora';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketHoraService {
  webSocket!: WebSocket; 

//  webSocketHora: Observable <WebSocketHora[]> = [];
webSocketObservable: Observable<WebSocketHora[]> = new Observable;
webSocketHora: WebSocketHora[] = [];

  constructor() {
    this.webSocket = new WebSocket('ws://localhost:8080/chat')
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