import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appForms';

  grupo:FormGroup;

  validEmailDom: Array<string> = [

    "area51.com.pe",
     "area51.pe"
  ]

  ngOnInit (){
    this.grupo = new FormGroup({
        nombreCompleto: new FormControl(null, Validators.required),
        correo: new FormControl(null, [Validators.required, Validators.email,
           this.validadorCorreoEmpresarial.bind(this)]),
        contrasena: new FormControl(null , [Validators.required, Validators.minLength(6)]),
        confirmacion: new FormControl(null, [Validators.required], [this.validadorConfirmacionContrasena])

    })
}

validadorExpresionRegular(patron): ValidatorFn{

  return (control: FormControl): {[s: string]: boolean} => {
      if(!control || control.value==null || control.value ==""){
        return null;
      }
      if (!patron.test(control.value)){
        return {correoNoValido: true}
      }
      return null
  }
}

validadorCorreoEmpresarial (control: FormControl): {[s:string]: boolean} {

  if(!control || control.value == null || control.value == "" || control.value.indexOf("@")==-1) {
    return null;
  }
  const dom = control.value.split("@")[1];
  if(this.validEmailDom.indexOf(dom)==-1){
    return {correoNoEmpresarial: true}
  }
}

validadorConfirmacionContrasena (control: AbstractControl): {[s:string]:boolean}{
  if(!control || !control.parent) {
    return null;
  }
  const password = control.parent.get("contrasena")
  const confirmacion = control.parent.get("confirmacion")

  if(!password || confirmacion)
  {
      return null;
  }

  if(password.value==""){

    return null
  }

  if(password.value !== confirmacion.value){
    return null
  }

}

  registrar() {
    console.log(this.grupo)
  }
}

//test comment