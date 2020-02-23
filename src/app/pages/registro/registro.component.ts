import { Component, OnInit } from "@angular/core";
import { UsuarioModel } from "../../models/usuario.model";

@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"]
})
export class RegistroComponent implements OnInit {
  usuario: UsuarioModel;
  constructor() {}

  ngOnInit() {
    this.usuario = new UsuarioModel();

    this.usuario.email = "paohinos1995@gmail.com";
  }

  onSubmit() {
    console.log("me subi");
    console.log(this.usuario);
  }
}
