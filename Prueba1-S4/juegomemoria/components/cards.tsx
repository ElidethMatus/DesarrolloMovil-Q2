import { View, Button } from 'react-native'
import React from 'react'

export default function CartaItem(props: {
    valor: string,
    alPresionar: () => void
}) {

    return (
        <View
            style={{
                margin: 10,
                width: 70
            }}
        >
            <Button
                title={props.valor}
                onPress={props.alPresionar}
            />
        </View>
    )
}