import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel  = new UsuarioModel();
  recordarme = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('email')) {
       this.usuario.email = localStorage.getItem('email');
       this.recordarme = true;
    }
  }

  submit(form: NgForm) {

    if (form.invalid) {return; }

    Swal.fire({
        allowOutsideClick: false,
        text: 'Espere porfavor...',
        icon: 'info',

    });

    Swal.showLoading();

    this.authService.login(this.usuario)
.subscribe(data => {
  Swal.close();

  if (this.recordarme) {
    localStorage.setItem('email', this.usuario.email);
  }
  this.router.navigateByUrl('/home');
  console.log(data);

}, (err) => {
  Swal.fire({

    text: 'err.error.error.message',
    icon: 'error',
    title: 'Error al autenticar'

});
});



  }
}
