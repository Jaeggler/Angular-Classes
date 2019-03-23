import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../interfaces/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Curso[]> {
    return this.http.get<Curso[]>("http://cursos.tibajodemanda.com/cursos") //es es una funcion generica

  }

  insertar(curso: Curso): Observable<any>{
    return this.http.post("http://cursos.tibajodemanda.com/cursos", curso)

  }

  actualizar(curso: Curso): Observable<any> {
    return this.http.put(`http://cursos.tibajodemanda.com/cursos/${curso.idCurso}`, curso) //Especificamente el API Rest esta diseñado para esto.
  }

  eliminar(curso: Curso): Observable<any> {
    return this.http.delete(`http://cursos.tibajodemanda.com/cursos/${curso.idCurso}`) //Especificamente el API Rest esta diseñado para esto.
  }
}
