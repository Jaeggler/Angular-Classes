import { CursosService } from './servicios/cursos.service';
import { UsersService } from './servicios/users.service';
import { Component } from '@angular/core';
import { Curso } from './interfaces/curso';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listadoCursos: Observable<Curso[]>
  listadoUsers: Object[] = []

  grupo: FormGroup

  constructor(
    private cursosService: CursosService,
    private usersService: UsersService,
    ) { }

  ngOnInit() {
    this.listar()
    // this.cursosService.listar()
    //   .subscribe(
    //     (data:Curso[]) => this.listadoCursos = data)

    this.grupo = new FormGroup({
      titulo: new FormControl(null, Validators.required)
    })

    this.usersService.listar()
      .subscribe(
        (data:any) => this.listadoUsers = data)
  }

  ingresar() {
    const curso: Curso = this.grupo.getRawValue();

    this.cursosService.insertar(curso)
    .subscribe(
      () => {
      this.grupo.reset();
      this.listar();
      }
    )
  }

  listar(){
    this.listadoCursos = this.cursosService.listar()
  }

  eliminar(curso: Curso){
    if (confirm("Sure?")){
      this.cursosService.eliminar(curso)
      .subscribe(
        () => this.listar(),
        error => {
          this.listar()
        }
      )
    }
  }
}
