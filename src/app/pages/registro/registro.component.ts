import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuario: UsuarioModel;
  recordarme = false;
  constructor(private authService: AuthService,
              private router: Router) {}

  ngOnInit() {
    this.usuario = new UsuarioModel();

  }

  onSubmit(form: NgForm) {

    if (form.invalid) {return; }

    Swal.fire({
      allowOutsideClick: false,
      text: 'Espere porfavor...',
      icon: 'info',

  });

    Swal.showLoading();

    console.log('me subi');
    console.log(this.usuario);
    console.log(form);
    this.authService.nuevoUsuario(this.usuario)
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
