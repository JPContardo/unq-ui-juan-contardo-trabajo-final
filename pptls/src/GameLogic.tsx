import { useState, useEffect } from 'react';
import { Jugada } from './componentes/Jugada';
import * as GameConfig from './componentes/GameConfig'


export const GameManager = () => {
    const rutaAnimacionInicial : string = './images/Inicial.png'
    const [jugadaActual, setJugadaActual] = useState<Jugada | undefined>(undefined)
    const [rutaAnimacionActual, setRutaAnimacionActual] = useState(rutaAnimacionInicial)

    useEffect(() => {
        if(jugadaActual !== undefined) {
            const jugadaPC = GameConfig.jugadasRegistradas[~~(Math.random() * GameConfig.jugadasRegistradas.length)]
            const path = `./images/${jugadaActual.nombre}VS${jugadaPC.nombre}.gif`
            setRutaAnimacionActual(path)
        }
    },[jugadaActual])


    return(
        <div className="MarcoMaquina">
            <img className="Animacion" src={require('' + rutaAnimacionActual)} alt="Juego"/>
            <div className="Botonera">
                <div className="btn-group btn-group-toggle" data-toggle="buttons" id="BotoneraSuperior">
                    <button type="button" className="btn btn-primary btn-sm" onClick={ () => setJugadaActual(GameConfig.obtenerJugadaPorNombre('Piedra')) }>Piedra</button>
                    <button type="button" className="btn btn-primary btn-sm" onClick={ () => setJugadaActual(GameConfig.obtenerJugadaPorNombre('Tijera')) }>Tijera</button>
                    <button type="button" className="btn btn-primary btn-sm" onClick={ () => setJugadaActual(GameConfig.obtenerJugadaPorNombre('Papel')) }>Papel</button>
                </div>
                <div className="btn-group btn-group-toggle" data-toggle="buttons" id="BotoneraInferior">
                    <button type="button" className="btn btn-primary btn-sm" onClick={ () => setJugadaActual(GameConfig.obtenerJugadaPorNombre('Lagarto')) }>Lagarto</button>
                    <button type="button" className="btn btn-primary btn-sm" onClick={ () => setJugadaActual(GameConfig.obtenerJugadaPorNombre('Spock')) }>Spock</button>
                </div>
            </div>
        </div>)
}
















