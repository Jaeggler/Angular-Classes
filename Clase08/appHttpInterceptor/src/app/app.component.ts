import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms"
import { AuthService } from './services/auth.service';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  register: FormGroup

  constructor( private authService: AuthService){}

  ngOnInit() {
    this.register = new FormGroup({
      fullName: new FormControl(null, Validators.required),
      mail: new FormControl (null, [Validators.required, Validators.email]),
      pass: new FormControl (null, Validators.required),
      nombreEmpresa: new FormControl("Mi Empresa")
    })

  }

  toRegister() {
    const user: User = this.register.getRawValue()
    this.authService.register(user)
      .subscribe(
        (data:any) => {
          console.log(data)
          this.register.reset()
        }
      )
  }

}
