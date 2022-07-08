import { Jugada } from './Jugada';

//Jugadas Registradas
const Piedra  = new Jugada('Piedra')
const Papel   = new Jugada('Papel')
const Tijera  = new Jugada('Tijera')
const Lagarto = new Jugada('Lagarto')
const Spock   = new Jugada('Spock')

export const jugadasRegistradas = [Piedra, Tijera, Papel, Lagarto, Spock] 

export const obtenerJugadaPorNombre = (nombre: string) => {
    return jugadasRegistradas.find(jugada => jugada.nombre === nombre)
}


//Colocar Jugadas Contra Las Que Gana
Piedra.setJugadasContraLasQueGana([Tijera, Lagarto])
Papel.setJugadasContraLasQueGana([Piedra, Spock])
Tijera.setJugadasContraLasQueGana([Papel, Lagarto])
Lagarto.setJugadasContraLasQueGana([Papel, Spock])
Spock.setJugadasContraLasQueGana([Tijera, Piedra])