import { Pipe, PipeTransform } from '@angular/core';

@Pipe({

  name: "reductor"
})

export class ReductorPipe implements PipeTransform {
    transform(texto: string, num: number, _adicional: string){
      if(texto.length > num){
      return texto.slice(0 , num) //slice devuelve los primeros items del arrego. los strings son arreglos. de a a b sin considerar b.
    }
    }
}
