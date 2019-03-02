import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.class';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(private usuarioService: Usuario) { }

  ngOnInit() {
    this.usuarioService.cambiarEstado(false)
    console.log("Desde Listado", this.usuarioService.estado)
  }

}
