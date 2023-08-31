import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HelperServiceService } from './componentes-generales/servicios/helper-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 // @Output() mensajePrueba = new EventEmitter();
  title = 'ASIS';
 // messageVenta!: string;
 // parentMessage = "message from parent"
  constructor(private helperService: HelperServiceService, private router: Router) {

  }

  ngOnInit(): void {  
  /*  this.helperService.customMessage.subscribe(msg => {
      this.messageVenta = msg;   
      this.parentMessage = msg;
      console.log("mensaje" + this.parentMessage); 
    });*/
  }

 

}
