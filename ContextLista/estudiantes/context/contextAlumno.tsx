import { createContext } from "react";
import { Alumno } from "../models/alumno";

export const contextAlumno = createContext({
    
    listaAlumnos: [] as Alumno[],

    agregarAlumno: (alumno: Alumno) => {},

});