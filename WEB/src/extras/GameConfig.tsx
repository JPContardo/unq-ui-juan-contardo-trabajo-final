import { Play } from './Play';

//Jugadas Registradas
const Piedra  = new Play('Piedra')
const Papel   = new Play('Papel')
const Tijera  = new Play('Tijera')
const Lagarto = new Play('Lagarto')
const Spock   = new Play('Spock')

//Colocar Jugadas Contra Las Que Gana
Piedra.setPlaysWithWhichHeWins([Tijera, Lagarto])
Papel.setPlaysWithWhichHeWins([Piedra, Spock])
Tijera.setPlaysWithWhichHeWins([Papel, Lagarto])
Lagarto.setPlaysWithWhichHeWins([Papel, Spock])
Spock.setPlaysWithWhichHeWins([Tijera, Piedra])

export const recordedPlays = [Piedra, Tijera, Papel, Lagarto, Spock]

export const getPiedra = () => {return Piedra}
export const getPapel = () => {return Papel}
export const getTijera = () => {return Tijera}
export const getLagarto = () => {return Lagarto}
export const getSpock = () => {return Spock}


