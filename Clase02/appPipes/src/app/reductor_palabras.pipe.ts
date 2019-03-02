import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "reductorPalabras"
})

export class ReductorPalabras implements PipeTransform{ //implements parece que es llamar el metodo de la transformacion
  transform(val:string, cantidadPalabras:number, texto:string) {
    const palabras: Array<string> = val.split(" ")

    if(palabras.length>cantidadPalabras){
        return palabras.slice(0, cantidadPalabras).join(" ") + texto
      }

      return val
}

}
