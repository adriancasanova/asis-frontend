import { Pipe, PipeTransform } from '@angular/core';
import { IngresoPersona } from '../ingresoPersona';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  /*transform(value: any, args: any): any {
   if (args.length < 2) return value;
    const resultPosts = [];
    for (const post of value) {
      if (post.nombreApellido.toUpperCase().indexOf(args.toUpperCase()) > -1) {
      //  if (post.nombreApellido.indexOf(args) > -1) { 
      resultPosts.push(post);
      };
    console.log("El ressultado es " + JSON.stringify(post))
    };
    return resultPosts;
  } */

  
  transform(value: any, arg: any): any {

    if (arg === '' || arg.length < 3) return value;
    const resultPosts = [];
    for (const data of value) {
      // Filtra por nombre y apellido
      if (data.nombreApellido.toUpperCase().indexOf(arg.toUpperCase()) > -1) {
        resultPosts.push(data);
        console.log("El ressultado es " + JSON.stringify(resultPosts))
        return resultPosts;
      };
      // Filtra por motivo
      if (data.dni.toString().toUpperCase().indexOf(arg.toUpperCase()) > -1) {
        resultPosts.push(data);
        console.log("El ressultado es " + JSON.stringify(resultPosts))
        return resultPosts;
      };
 
    };   

  

  
   
  } 

  /*
  transform(value: any[], query: string): unknown {
    if(query === '' || query === undefined) {
      return value;
    }
    return value.filter((user: { nombreApellido: string; }) => user.nombreApellido.indexOf(query) != -1)
  } */




}

