import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.class';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  estadoDelUsuario: boolean = false
  suscripcion: Subscription

  constructor(private usuarioService: Usuario) { } //inyeccion del servicio

  ngOnInit() {
    this.estadoDelUsuario = this.usuarioService.estado

    // const actividadUsuario = new Usuario()
    // actividadUsuario.estado = true
    // console.log("Desde Cabecera", actividadUsuario.estado)
  }

  suscribir(){
    this.suscripcion =
    this.usuarioService.outCambioestadoUsuario.subscribe(
      estado => this.estadoDelUsuario = estado
    )
  }

  desuscribir(){
    this.suscripcion.unsubscribe
  }

}
