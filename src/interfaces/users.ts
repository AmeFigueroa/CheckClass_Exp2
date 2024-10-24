import { Asignatura } from "./asignatura";
import { Justificativo } from "./justificativo";

// Get Put Delete
export interface Users {
    id: number;
    correo: string;
    contrasena: string;
    nombre: string;
    apellido: string;
    rut: string;
    carrera: string;
    fotoPerfil: string;
    asignaturas?: Asignatura[];
    justificativos?: Justificativo[];  
  }
  
  export interface UserNuevo {
    correo: string;
    contrasena: string;
    nombre: string;
    apellido: string;
    rut: string;
  }