import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ModelComponent } from './model/model.component';
import { MiDirectiva } from './Directivas/midirectiva.directive';
import { SubirArchivosDirective } from './Directivas/subir-archivos.directive';

@NgModule({
  declarations: [
    AppComponent,
    ModelComponent,
    MiDirectiva,
    SubirArchivosDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule, //
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
