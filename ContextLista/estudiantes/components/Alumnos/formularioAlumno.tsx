import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Button
} from "react-native";
import { useContextAlumno } from "../../providers/alumnoProviders";

export default function FormularioAlumno() {
    const { agregarAlumno, listaAlumnos } = useContextAlumno();
    const [nombre, setNombre] = useState('');

    function guardarAlumno() {
        if (nombre.trim() === '') return;
        agregarAlumno({
            id: (listaAlumnos.length + 1).toString(),
            name: nombre
        });
        setNombre('');
    }

    return (
        <View>
            <Text>Formulario Alumno</Text>
            <TextInput
                placeholder="Ingrese nombre"
                value={nombre}
                onChangeText={setNombre}
                style={{
                    borderWidth: 1,
                    marginBottom: 10,
                    padding: 10
                }}
            />
            <Button
                title="Agregar Alumno"
                onPress={guardarAlumno}
            />
        </View>
    );
}