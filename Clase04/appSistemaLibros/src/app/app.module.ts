import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Route} from "@angular/router"
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListadoLibrosComponent } from './listado-libros/listado-libros.component';
import { AgregarLibroComponent } from './agregar-libro/agregar-libro.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ItemComponent } from './item/item.component';
import { BookeditComponent } from './bookedit/bookedit.component';

const routes: Array<Route> = [
  {path: "", component: LoginComponent},
  {path: "libros", children: [
    {path: "", component: ListadoLibrosComponent},
    {path: "agregar", component: AgregarLibroComponent},
    {path: "editar", component: BookeditComponent}
  ]}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListadoLibrosComponent,
    AgregarLibroComponent,
    CabeceraComponent,
    ItemComponent,
    BookeditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
