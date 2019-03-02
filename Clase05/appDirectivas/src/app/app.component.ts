import { Component, ViewChild, ElementRef } from '@angular/core';

FileList.prototype["forEach"] = function(callback){
  [].forEach.call(this, callback)
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  archivos: Array<File> = []

  @ViewChild("inputNombre") nombreInput: ElementRef //Referencia local para html

  color1: string = "greenyellow"
  color2: string = "skyblue"

  pApellido = "Santa Cruz"
  estado: boolean = false

  movimiento(estado: boolean){
    this.estado = estado
    console.log(this.estado)
  }

  recepcion(fl: FileList){
    fl["forEach"](item => {
      const partes = item.name.split(".")
      const extension = partes[partes.lenght-1]
      const extensionesPermitidas = ["jpg", "jpeg", "gif", "png"]

      if(extensionesPermitidas.indexOf(extension)>-1)
      this.archivos.push(item)
    })
    console.log(fl)
  }

  ngOnInit(){
    // this.nombreInput.nativeElement.style.backgroundColor = "yellow" una sola propiedad
  }

  ngAfterViewInit(){    //metodo que se ejecuta DESPUES DEL HTML
    this.nombreInput.nativeElement.style = "background-color:yellow"
  }

  saludar(apellido:string){
    this.pApellido = apellido
    console.log(`Hola ${apellido}`)
  }

  agregarOtraForma(){
    console.log(this.nombreInput.nativeElement.value)
  }

  agregarnombre(nombre: string){
    console.log(nombre)

  }
}
