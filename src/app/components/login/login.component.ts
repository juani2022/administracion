import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      usuario: ['',Validators.required],
      password: ['',Validators.required]
    })
  }
  ngOnInit():void {
  }

  entrar() {
    console.log(this.form);
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if (usuario=='juani' && password=='admin1234') {
      //redireccionamos 
      this.fakeLoading();
    } else {
      //mensaje de error;
      this.Error();
    }
  }
  Error(){
    this._snackBar.open('Usuario o contraseña ingresado son incorrectos','',{
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

fakeLoading() {
  this.loading = true;
setTimeout(() => {

this.router.navigate(['dashboard'])
}, 1500);
}

}
