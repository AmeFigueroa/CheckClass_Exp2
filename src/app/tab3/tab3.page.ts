import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Users } from '../../interfaces/users';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  passwordType: string = 'password';

  usuario: Users | null = null;

  constructor(
    private router: Router,
    private authservice: AuthService
  ) {}

  ngOnInit():void {
    this.cargarUsuario();
  }

  cargarUsuario() {
    const correo = sessionStorage.getItem('correo');
    if (correo) {
      this.authservice.getUserByEmail(correo).subscribe(users => {
        this.usuario = users[0];
      });
    }
  }

  verContrasena() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }

  cerrarSesion() {
    sessionStorage.clear();
    this.router.navigate(['/comienzo']); 
  }

  editarPerfil(){
    this.router.navigate(['editar-perfil'])
  }
  
}

