export class Jugada {
    nombre: string;
    jugadasContraLasQueGana: Array<Jugada> = [];

    constructor(nombre: string) {
        this.nombre = nombre
    }

    ganaEstaRonda(jugadaRival : Jugada) : boolean {
        return this.jugadasContraLasQueGana.includes(jugadaRival)
    }

    empataEstaRonda(jugadaRival : Jugada) : boolean {
        return this === jugadaRival
    }

    setJugadasContraLasQueGana(jugadas : Array<Jugada>) {
        this.jugadasContraLasQueGana.concat(jugadas)
    }
}