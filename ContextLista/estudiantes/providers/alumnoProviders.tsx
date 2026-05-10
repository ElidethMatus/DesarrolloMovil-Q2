import React, { useContext, useEffect, useState } from "react";
import { ViewProps } from "../models/view";
import { Alumno } from "../models/alumno";
import { contextAlumno } from "../context/contextAlumno";

export default function AlumnoProvider(props: ViewProps) {

    const [listaAlumnos, setListaAlumnos] = useState<Alumno[]>([
        { id: '1', name: 'Juan' },
        { id: '2', name: 'Maria' },
        { id: '3', name: 'Carlos' },
        { id: '4', name: 'Ana' },
        { id: '5', name: 'Pedro' },
        { id: '6', name: 'Lucia' },
        { id: '7', name: 'Jose' },
        { id: '8', name: 'Sofia' },
        { id: '9', name: 'Miguel' },
        { id: '10', name: 'Elena' },
    ]);

    function agregarAlumno(alumno: Alumno) {
        setListaAlumnos([...listaAlumnos, alumno]);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setListaAlumnos((prev) => [
                ...prev,
                {
                    id: '11',
                    name: 'Nuevo Alumno'
                }
            ]);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);
    return (

        <contextAlumno.Provider
            value={{ listaAlumnos, agregarAlumno }}
        >
            {props.children}
        </contextAlumno.Provider>
    );
}
export const useContextAlumno = () => {
    return useContext(contextAlumno);
}