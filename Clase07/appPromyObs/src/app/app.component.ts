//PROMESAS

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {

//   //usuarios: [] = []
//   fotos: Promise<any>

//   ajax (url, resolve, reject) {
//     const xhr = new XMLHttpRequest(); //objeto que solicita el requerimiento al servidor
//     xhr.onreadystatechange = function() { //condicional para evaluar cuando el estado de la solicitud esta completa
//       if(this.readyState == 4 && this.status == 200){
//         resolve(JSON.parse(xhr.responseText)) //accion a realizar cuando se cumple la promesa
//         console.log(xhr.responseText)
//       }else if (this.readyState == 4){
//         reject({status: this.status, message: this.statusText}) //accion a realizar cuando se rechaza la promesa
//       }
//     }
//     xhr.open("get", url, true); //de donde jalar la informacion
//     xhr.send();
//   }

//   ngOnInit(){

//   const promesafotos = new Promise ((resolve, reject)=>{ //La promesa es traer data del APIRest
//     this.ajax("http://jsonplaceholder.typicode.com/photos", resolve, reject)
//   })
 

// this.fotos = promesafotos.then() 

// // promesafotos.then( //then. y then.catch. son formas identicas
// //     (data:any) => {
// //       this.fotos = data;
// //     }).catch(
// //     error => console.log("Promesa rechazada!", error)
// //       )
    

//   }
// }

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {

//   usuarios: [] = []
//   fotos: [] = []

//   ajax(url, resolve, reject) {
//     const xhr = new XMLHttpRequest()

//     xhr.onreadystatechange = function () {
//       if (this.readyState == 4 && this.status == 200) {
//         resolve(JSON.parse(xhr.responseText))
//       } else if (this.readyState == 4) {
//         reject({ status: this.status, message: this.statusText })
//       }
//     }

//     xhr.open("get", url, true)
//     xhr.send()
//   }

//   ngOnInit() {
//     const promesa = new Promise((resolve, reject) => {
//       this.ajax("http://jsonplaceholder.typicode.com/posts", resolve, reject)
//     })

    
//     const promesaFotos = new Promise((resolve, reject) => {
//       this.ajax("http://jsonplaceholder.typicode.com/photos", resolve, reject)
//     })

//     // Promise.all([promesa, promesaFotos])
//     // .then(
//     //   (respuesta:any[]) => {
//     //     this.usuarios = respuesta[0],
//     //     this.fotos = respuesta[1]
//     //   })
    
//     //   .catch(
//     //     error => console.log(error)
//     //   )
  
//     Promise.race([promesa, promesaFotos])
//     .then(
//       respuesta => console.log(respuesta)
//     )
//     .catch(
//       error => console.log(error)
//     )
//   }


//OBSERVABLES
import { Component } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import {map } from "rxjs/operators"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

suscripcion: Subscription;


convertirAJson(texto): Object { //metodo para convertir los datos de entrada en JSON
  return JSON.parse(texto);
}

ngOnInit(){
  const observable: Observable<string> = Observable.create(
    (observador: Observer<string>) =>{
      const self = this;
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (this.readyState==4 && this.status == 200) {

          // let datos: any = self.convertirAJson(xhr.responseText);
          // datos = datos.map(dato => {dato.name = dato.name.toUpperCase()
          //   return dato
          // })
          // datos = datos.filter(dato => dato.id > 4)


          observador.next(xhr.responseText)
        }else if (this.readyState == 4) {
          observador.error(this.statusText)
        }
      }

      xhr.open("get", "http://jsonplaceholder.typicode.com/users", true)
      xhr.send()
    } 

  )

  // const metodos = {
  //   next: mensaje => console.log(mensaje),
  //   error: error => console.log(error),
  //   complete: () => console.log("fin")

  // }

    this.suscripcion = observable
    .pipe(
      map((data:any) => {
        return JSON.parse(data);
      }),
      map(data => {
        const resp = data.map(dato => {
          dato.name = dato.name.toUpperCase();
          return dato;
        })
        return resp;
      }),
      map(data => {
        return data.filter(dato => dato.id >4)
      })
    )
    .subscribe(
      mensaje => {

        console.table(mensaje)
      },
      error => console.log(error),
      () => console.log("Termine mi jornada")
    )

  //this.suscripcion = observable.subscribe(metodos);
  const observable2 = Observable.create(
    (observador: Observer<any>) => {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status ==20){
          observador.complete()
        }else if (this.readyState == 3){
          observador.next(xhr.response.lenght)
        }
      }
      xhr.open("get", "/descargar/wordpress.zip", true)
    xhr.send()
    }
           
    )

    observable2
    .subscribe(
      data => console.log(data),
      error => console.log(error),
      complete => console.log("Archivo descargado")
    )
}
ngOnDestroy(){
this.suscripcion.unsubscribe()

}

}

