import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel;
  constructor(private authService: AuthService) { }

  ngOnInit() {

    this.usuario = new UsuarioModel();
  }

  submit(form: NgForm) {

    if (form.invalid) {return; }


    this.authService.login(this.usuario)
.subscribe(data => {
console.log(data);
}, (err) => {
  console.log(err.error.error.message);
});



  }
}
