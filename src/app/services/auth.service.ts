import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = ' https://identitytoolkit.googleapis.com/v1/accounts:';
  private apiKey = 'AIzaSyAHPAZ8glbRHwpV3JYIND5nyKOQxEVVL94';

  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) { }


  logout() {


  }
  login(usuario: UsuarioModel) {
    const authData = {
      email : usuario.email,
      password: usuario.password,
      returnSecureToken: true,
    };

    return this.http.post(
      `${this.url}signInWithPassword?key=${this.apiKey}`,
      authData
      );
  }

  nuevoUsuario(usuario: UsuarioModel) {
    const authData = {
      email : usuario.email,
      password: usuario.password,
      returnSecureToken: true,
    };

    return this.http.post(
    `${this.url}signUp?key=${this.apiKey}`,
    authData
    );
  }
}
