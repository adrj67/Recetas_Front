import { Pipe, PipeTransform } from '@angular/core';
import { Receta } from '../models/receta';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  
  transform(value: Receta[], ...args: string[]): Receta[] {
    const resultReceta: Receta[] = [];
  
    if (!args || args.length === 0) return value; // No hay argumentos, retorna la lista original
  
    const filtro = args[0].toLowerCase();
  
    for (const receta of value) {
      if (
        typeof receta === 'object' &&
        (receta.tipo.toLowerCase().includes(filtro) ||
         receta.autor.toLowerCase().includes(filtro) ||
         receta.nombre.toLowerCase().includes(filtro) ||
         receta.ingredientes.toLowerCase().includes(filtro))
      ) {
        resultReceta.push(receta);
      }
    }
  
    return resultReceta;
  }
  

  // transform(value: any, ...args:any[]): any {
  //   const resultReceta = [];

  //   if(!args || args?.length < 3) return value; //comienza a buscar en la tercer letra escrita
  //   let result: any = [];

  //   for(const receta of value){
  //     if (receta.nombre.toLowerCase().indexOf(args.toLowerCase())> -1){
  //       resultReceta.push(receta);
  //     };
  //   };
  //   return resultReceta;
  // }

}
