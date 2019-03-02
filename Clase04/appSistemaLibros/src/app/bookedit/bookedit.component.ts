import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../servicios/libros.service';
import { ILibro } from '../modelos/libro.interface';

@Component({
  selector: 'app-bookedit',
  templateUrl: './bookedit.component.html',
  styleUrls: ['./bookedit.component.css']
})
export class BookeditComponent implements OnInit {

  private libro: ILibro[]

  constructor(
    private librosService: LibrosService,
  ) { }

  ngOnInit() {

  }

}
