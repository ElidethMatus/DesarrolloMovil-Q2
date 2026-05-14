import { View, Text } from 'react-native'
import React from 'react'
import { useJuego } from '../providers/juegoProvider'

export default function Saves() {

    const { partidas } = useJuego()
    return (
        <View style={{ marginTop: 20 }}>

            {partidas.map((item, index) => (
                    <Text key={index}>
                        Partida {index + 1}: {item}
                    </Text>
                ))
            }
        </View>
    )}