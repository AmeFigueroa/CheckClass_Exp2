import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.page.html',
  styleUrls: ['./asignatura.page.scss'],
})
export class AsignaturaPage implements OnInit {

  asignaturas: any;
  nombreAsignatura: any;
  fecha: any;
  nombreProfesor: any;
  correo: any;
  rut: any;
  qrdata: string;

  constructor(
    private activated: ActivatedRoute,
    private router: Router
  ) {
    this.activated.queryParams.subscribe(params => {
      if (params['asignatura']) {
        this.asignaturas = JSON.parse(params['asignatura']);
        this.nombreAsignatura = this.asignaturas.nombreAsignatura;
        this.fecha = this.asignaturas.fecha;
        this.nombreProfesor = this.asignaturas.nombreProfesor;
      }
    });
    
    this.qrdata = '';
    this.rut = sessionStorage.getItem('rut');
    this.correo = sessionStorage.getItem('correo');
  }

  ngOnInit() {
  }

  generarQR() {
    this.qrdata = '';
    console.log(this.nombreAsignatura);
    console.log(this.fecha);
    console.log(this.nombreProfesor);
    console.log(this.rut);
    console.log(this.correo);

    if (this.nombreAsignatura && this.fecha && this.nombreProfesor && this.rut && this.correo) {
      this.qrdata = `${this.nombreAsignatura}, ${this.fecha}, ${this.nombreProfesor}, ${this.rut.slice(0, 8)}, ${this.correo}`;
      console.log(this.qrdata);
    } else {
      console.error("Faltan datos para generar el QR");
    }
  }

  cerrarSesion() {
    sessionStorage.clear();
    this.router.navigate(['/comienzo']); 
  }

  volver() {
    this.router.navigate(['/tabs/tab2']);
  }
}
