import { LogService } from './log.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class Usuario {
  estado: boolean = false

  outCambioestadoUsuario = new EventEmitter()

  constructor(private logservice:LogService){}

  cambiarEstado(estadoUsuario: boolean){
    this.logservice.EscribirConsola("Estado cambiado", "error")
    this.estado = estadoUsuario
    this.outCambioestadoUsuario.emit(estadoUsuario)

  }
}
