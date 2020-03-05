import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuario: UsuarioModel;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.usuario = new UsuarioModel();

  }

  onSubmit(form: NgForm) {

    if (form.invalid) {return; }

    console.log('me subi');
    console.log(this.usuario);
    console.log(form);
    this.authService.nuevoUsuario(this.usuario)
    .subscribe(data => {
      console.log(data);
    }, (err) => {
console.log(err.error.error.message);
    });
  }
}
