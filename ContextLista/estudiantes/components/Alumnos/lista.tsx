import React from "react";
import {
    View,
    Text,
    FlatList
} from "react-native";

import { useContextAlumno } from "../../providers/alumnoProviders";
export default function ListaAlumnos() {

    const { listaAlumnos } = useContextAlumno();
    return (
        <FlatList
            data={listaAlumnos}
            keyExtractor={(item) => item.id}

            renderItem={({ item }) => (
                <View
                    style={{
                        borderWidth: 1,
                        padding: 10,
                        marginTop: 10
                    }}
                >
                    <Text>
                        {item.id} - {item.name}
                    </Text>
                </View>
            )}
        />
    );
}