import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appSubirArchivos]'
})
export class SubirArchivosDirective {

  @Output("outHover") outHover = new EventEmitter<boolean>()
  @Output("outSeleccionados") outSeleccionados = new EventEmitter<FileList>()

  constructor() { }

  @HostListener("dragenter", ["$event"]) arrastrando($event){ //dragover es una funcion de Javascript predefinida
    $event.preventDefault()
    this.outHover.emit(true)
    console.log("Archivo(s) arrastrando")
  }

  @HostListener("dragleave", ["$event"]) saliendo($event){ //dragover es una funcion de Javascript predefinida
    $event.preventDefault()
    this.outHover.emit(false)
    console.log("Fuera")
  }

  @HostListener("drop", ["$event"]) soltando($event) {
    $event.preventDefault()
    const lista: FileList = $event.dataTransfer.files
    this.outSeleccionados.emit(lista)
    console.log(lista)
    }
}
