import React, { useContext, useState } from 'react'
import { JuegoContext } from '../contexts/juegoContext'

export default function JuegoProvider(props: any) {

    const [partidas, setPartidas] = useState<string[]>([])
    return (
        <JuegoContext.Provider
            value={{
                partidas,
                setPartidas
            }}>
            {props.children}
        </JuegoContext.Provider>
    )
}
export const useJuego = () => useContext(JuegoContext)