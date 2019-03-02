import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {

  idRuta: number
  curso: string
  cantidad: number
  rol: string

  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // this.idRuta = +this.activatedroute.snapshot.paramMap.get("id") //Solo necesario si vamos a invocar desde otro componente

    this.activatedroute.paramMap.subscribe(
      (parametros:any) => this.idRuta = +parametros.params.id
    ) //Si es que se quiere cambiar la ruta desde el mismo componenten

    // this.curso = this.activatedroute.snapshot.queryParamMap.get("curso")

    this.activatedroute.queryParamMap.subscribe(
      (parametros:any) => this.curso = parametros.params.curso
    ) //Si es que se quiere cambiar la ruta desde el mismo componenten

    // this.rol = this.activatedroute.snapshot.fragment

    this.activatedroute.fragment.subscribe(
      fragment => this.rol = fragment
    ) //Si es que se quiere cambiar la ruta desde el mismo componenten
  }

  irAlRegistro(id: number) {
    this.router.navigate(
      ["/cursos", "edicion", id],
      {queryParams: {cantidad: 50},
      fragment: "operador",
      queryParamsHandling: "merge"})

  }

}
