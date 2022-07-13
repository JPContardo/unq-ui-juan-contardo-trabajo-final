export class Play {
    name: string;
    playsWithWhichHeWins: Array<Play> = [];

    constructor(name: string) {
        this.name = name
    }

    ganaEstaRonda(rivalPlay : Play) : boolean {
        return this.playsWithWhichHeWins.includes(rivalPlay)
    }

    empataEstaRonda(jugadaRival : Play) : boolean {
        return this === jugadaRival
    }

    setPlaysWithWhichHeWins(plays : Array<Play>) {
        this.playsWithWhichHeWins = plays
    }
}