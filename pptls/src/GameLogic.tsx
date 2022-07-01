import { useState, useEffect } from 'react';

export const GameManager = () => {
    // const gifSercher : Map<String,String> = new Map<String,String>()
    const animacionInicial : string = './images/Inicial.png'
    const pendiente : Figura = new Pendiente("Pendiente")
    const piedra : Figura = new Piedra("Piedra")
    const tijera : Figura = new Tijera("Tijeta")
    const papel : Figura = new Papel("Papel")
    const lagarto : Figura = new Lagarto("Lagarto")
    const spock : Figura = new Spock("Spock")
    const [jugadaActual, setJugadaActual] = useState(pendiente)
    const [animacionActual, setAnimacionActual] = useState(animacionInicial)
    //const [estadoBotones, setEstadoBotones] = useState("false")

    useEffect(() => {
        if(jugadaActual !== pendiente) {
            setAnimacionActual('./images/PiedraVSPiedra.gif')
        }
        
    },[jugadaActual])


    return(
        <div className="MarcoMaquina">
            <img className="Animacion" src={require('' + animacionActual)} alt="Juego"/>
            <div className="Botonera">
                <div className="btn-group btn-group-toggle" data-toggle="buttons" id="BotoneraSuperior">
                    <button type="button" className="btn btn-primary btn-sm" onClick={ () => setJugadaActual(piedra) }>Piedra</button>
                    <button type="button" className="btn btn-primary btn-sm" onClick={ () => setJugadaActual(tijera) }>Tijera</button>
                    <button type="button" className="btn btn-primary btn-sm" onClick={ () => setJugadaActual(papel) }>Papel</button>
                </div>
                <div className="btn-group btn-group-toggle" data-toggle="buttons" id="BotoneraInferior">
                    <button type="button" className="btn btn-primary btn-sm" onClick={ () => setJugadaActual(lagarto) }>Lagarto</button>
                    <button type="button" className="btn btn-primary btn-sm" onClick={ () => setJugadaActual(spock) }>Spock</button>
                </div>
            </div>
        </div>)
}




abstract class Figura {
    nombre: String;

    constructor(nombre: String) {
        this.nombre = nombre;
    }

    protected abstract ganaAnte(figuraRival : Figura) : Boolean

    protected empataAnte(figuraRival : Figura) : Boolean {
        return this.nombre === figuraRival.nombre
    }
}

class Piedra extends Figura {
    protected ganaAnte(figuraRival : Figura) : Boolean {
        return(figuraRival.nombre === "Tijera" || figuraRival.nombre === "Lagarto")
    }
}

class Tijera extends Figura {
    protected ganaAnte(figuraRival : Figura) : Boolean {
        return(figuraRival.nombre === "Papel" || figuraRival.nombre === "Lagarto")
    }
}

class Papel extends Figura {
    protected ganaAnte(figuraRival : Figura) : Boolean {
        return(figuraRival.nombre === "Piedra" || figuraRival.nombre === "Spock")
    }
}

class Lagarto extends Figura {
    protected ganaAnte(figuraRival : Figura) : Boolean {
        return(figuraRival.nombre === "Papel" || figuraRival.nombre === "Lagarto")
    }
}

class Spock extends Figura {
    protected ganaAnte(figuraRival : Figura) : Boolean {
        return(figuraRival.nombre === "Piedra" || figuraRival.nombre === "Tijera")
    }
}

class Pendiente extends Figura {
    protected ganaAnte(figuraRival : Figura) : Boolean {
        return(false)
    }
}
