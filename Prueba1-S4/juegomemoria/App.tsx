import { View, Text } from 'react-native'
import { useState } from 'react'
import CartaItem from './components/cards'
import Saves from './components/historialUs'
import JuegoProvider from './providers/juegoProvider'

export function Juego() {

  const [cartas, setCartas] = useState([
    { id: 1, valor: 'A', descubierta: false },
    { id: 2, valor: 'B', descubierta: false },
    { id: 3, valor: 'C', descubierta: false },
    { id: 4, valor: 'D', descubierta: false },
    { id: 5, valor: 'A', descubierta: false },
    { id: 6, valor: 'B', descubierta: false },
    { id: 7, valor: 'C', descubierta: false },
    { id: 8, valor: 'D', descubierta: false }
  ])

  const [seleccionadas, setSeleccionadas] = useState<string[]>([])
  const [partidas, setPartidas] = useState<string[]>([])

  function revelar(id: number) {
    const nuevasCartas = cartas.map((item) => {

      if (item.id === id) {
        return {
          ...item,
          descubierta: true
        }
      }

      return item
    })

    setCartas(nuevasCartas)
    const carta = cartas.find((item) => item.id === id)

    if (carta) {

      const nuevasSeleccionadas = [
        ...seleccionadas,
        carta.valor
      ]

      setSeleccionadas(nuevasSeleccionadas)

      if (nuevasSeleccionadas.length === 2) {
        if (nuevasSeleccionadas[0] === nuevasSeleccionadas[1]) {

          alert('Par!')
          setSeleccionadas([])
          const ganadas = nuevasCartas.filter(
            (item) => item.descubierta
          )

          if (ganadas.length === 8) {
            alert('Felicidades, ganaste!')
            setPartidas([
              ...partidas,
              'Felicidades, ganaste!'
            ])

          }
        } else {
          alert('Las cartas no coinciden')
          setPartidas([
            ...partidas,
            'Perdió'
          ])
          setTimeout(() => {

            setCartas([
              { id: 1, valor: 'A', descubierta: false },
              { id: 2, valor: 'B', descubierta: false },
              { id: 3, valor: 'C', descubierta: false },
              { id: 4, valor: 'D', descubierta: false },
              { id: 5, valor: 'A', descubierta: false },
              { id: 6, valor: 'B', descubierta: false },
              { id: 7, valor: 'C', descubierta: false },
              { id: 8, valor: 'D', descubierta: false }
            ])
            setSeleccionadas([])
          }, 1000)

        }
      }
    }
  }

  return (
    <View
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

      <View
        style={{flexDirection: 'row', flexWrap: 'wrap', width: 180, justifyContent: 'center'}}>

        {cartas.map((item) => (
            <CartaItem
              key={item.id}
              valor={item.descubierta ? item.valor : '?'}
              alPresionar={() => revelar(item.id)}/>
          ))
        }

      </View>
      <View style={{ marginTop: 20 }}>

        {partidas.map((item, index) => (
            <Text key={index}>
              Partida {index + 1}: {item}
            </Text>
          ))
        }

      </View>
      <Saves />
    </View>
  )
}

export default function App() {

  return (
    <JuegoProvider>
      <Juego />
    </JuegoProvider>
  )
}