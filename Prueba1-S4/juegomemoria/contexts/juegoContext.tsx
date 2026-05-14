import { createContext } from 'react'

export const JuegoContext = createContext({
    partidas: [] as string[],
    setPartidas: (partidas: string[]) => {}
})