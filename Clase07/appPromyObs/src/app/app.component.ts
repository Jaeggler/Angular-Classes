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

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usuarios: [] = []
  fotos: [] = []

  ajax(url, resolve, reject) {
    const xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        resolve(JSON.parse(xhr.responseText))
      } else if (this.readyState == 4) {
        reject({ status: this.status, message: this.statusText })
      }
    }

    xhr.open("get", url, true)
    xhr.send()
  }

  ngOnInit() {
    const promesa = new Promise((resolve, reject) => {
      this.ajax("http://jsonplaceholder.typicode.com/posts", resolve, reject)
    })

    
    const promesaFotos = new Promise((resolve, reject) => {
      this.ajax("http://jsonplaceholder.typicode.com/photos", resolve, reject)
    })

    Promise.all([promesa, promesaFotos])
    .then(
      (respuesta:any[]) => {
        this.usuarios = respuesta[0],
        this.fotos = respuesta[1]
      })
    
      .catch(
        error => console.log(error)
      )
  
  }


}

