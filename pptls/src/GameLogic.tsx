import { useState, useEffect } from 'react';
import { Jugada } from './componentes/Jugada';
import * as GameConfig from './componentes/GameConfig'


export const GameManager = () => {
    const rutaDeLaAnimacionInicial     : string = './images/Inicial.png'
    const rutaDeLaAnimacionComputerWin : string = './images/Computer_Win.gif'
    const rutaDeLaAnimacionPlayerWin   : string = './images/Nobody_Win.gif'
    const rutaAnimacionNobodyWin       : string = './images/Player_Win.gif'
    const [rutaDeLaAnimacionActual, setRutaAnimacionActual] = useState(rutaDeLaAnimacionInicial)
    const [jugadaActual, setJugadaActual] = useState<Jugada | undefined>(undefined)
    const [estadoDelBoton, setEstadoDelBoton] = useState('')

    useEffect(() => {
        if(jugadaActual !== undefined) {
            setEstadoDelBoton('disabled')
            const jugadaPC = GameConfig.jugadasRegistradas[~~(Math.random() * GameConfig.jugadasRegistradas.length)]
            const path = `./images/${jugadaActual.nombre}VS${jugadaPC.nombre}.gif`
            setRutaAnimacionActual(path)
            setTimeout(() => setRutaAnimacionActual(determinarGanador(jugadaPC)), 6000);
            setTimeout(() => {setRutaAnimacionActual(rutaDeLaAnimacionInicial); setJugadaActual(undefined); setEstadoDelBoton('')}, 12000);
        }

        const determinarGanador = (jugadaRival: Jugada) => {
            if(jugadaActual?.ganaEstaRonda(jugadaRival)) {
                return rutaDeLaAnimacionPlayerWin
            }

            if(jugadaActual?.empataEstaRonda(jugadaRival)) {
                return rutaAnimacionNobodyWin
            }

            return rutaDeLaAnimacionComputerWin
        }
    },[jugadaActual])

    return(
        <div className="MarcoMaquina">
            <img className="Animacion" src={require('' + rutaDeLaAnimacionActual)} alt="Juego"/>
            <div className="Botonera">
                <div className="btn-group btn-group-toggle" data-toggle="buttons" id="BotoneraSuperior">
                    <button type="button" className={`btn btn-primary btn-sm ${estadoDelBoton}`} onClick={ () => setJugadaActual(GameConfig.obtenerJugadaPorNombre('Piedra')) }>Piedra</button>
                    <button type="button" className={`btn btn-primary btn-sm ${estadoDelBoton}`} onClick={ () => setJugadaActual(GameConfig.obtenerJugadaPorNombre('Tijera')) }>Tijera</button>
                    <button type="button" className={`btn btn-primary btn-sm ${estadoDelBoton}`} onClick={ () => setJugadaActual(GameConfig.obtenerJugadaPorNombre('Papel')) }>Papel</button>
                </div>
                <div className="btn-group btn-group-toggle" data-toggle="buttons" id="BotoneraInferior">
                    <button type="button" className={`btn btn-primary btn-sm ${estadoDelBoton}`} onClick={ () => setJugadaActual(GameConfig.obtenerJugadaPorNombre('Lagarto')) }>Lagarto</button>
                    <button type="button" className={`btn btn-primary btn-sm ${estadoDelBoton}`} onClick={ () => setJugadaActual(GameConfig.obtenerJugadaPorNombre('Spock')) }>Spock</button>
                </div>
            </div>
        </div>)
    
}
















