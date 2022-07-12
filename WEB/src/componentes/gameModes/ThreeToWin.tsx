/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import Standar from "./Standar"
import ToastMessage from "../others/ToastMessage"
import Api from "../main/Api"

const ThreeToWin = () => {
    const [getInputName, setInputName] = useState('')
    const [getCurrentUserName, setCurrentUserName] = useState('')
    const [getNumberOfRoundsWonByTheComputer, addNewRoundWonByTheComputer] = useState(0)
    const [getNumberOfRoundsWonByThePlayer, addNewRoundWonByThePlayer] = useState(0)
    const [getRows , setRows] = useState<JSX.Element[] | never[]>([])
    const [getShowFlag, setShowFlag] = useState('hide')
    const [getMessage, setMessage] = useState('')
    const defaultToastMessage = <ToastMessage getMessage={getMessage} getShowFlag={getShowFlag} setShowFlag={setShowFlag}/>

    useEffect(() => {
        const resetScores = () => {
            addNewRoundWonByThePlayer(0)
            addNewRoundWonByTheComputer(0)
        }

        if(getNumberOfRoundsWonByThePlayer === 3) {
            resetScores()
            setMessage(`El ganador es ${getCurrentUserName}`)
            Api.registerNewWin(getCurrentUserName).then((response) => setRows(response.data.map((i: { name: string , score: number }) => <tr className="table-light"><td>{i.name}</td><td>{i.score}</td></tr>)))
        } else if(getNumberOfRoundsWonByTheComputer === 3) {
            resetScores()
            setMessage(`El ganador es Computer`)
        }

    },[getNumberOfRoundsWonByTheComputer, getNumberOfRoundsWonByThePlayer])

    useEffect(() => {
        if(!!getMessage) {
            setShowFlag('show')
        }
    }, [getMessage])

    useEffect(() => {
        if(!!getCurrentUserName) {
            Api.setPlayer(getInputName).then((response) => setRows(response.data.map((i: { name: string , score: number }) => <tr className="table-light"><td>{i.name}</td><td>{i.score}</td></tr>)))
            setInputName('')
        }
    }, [getCurrentUserName])

    return(
            <div className="ContenedorMejorDeCinco">
                <Standar addNewRoundWonByThePlayer={addNewRoundWonByThePlayer} addNewRoundWonByTheComputer={addNewRoundWonByTheComputer}/>
                <div className="ContenedorDatosDeSession">
                    <div className="ContenedorNombreDeUsuario">
                        <input value={getInputName} onChange={(event) => setInputName(event.target.value)} maxLength={100} placeholder="Ingrese su nombre ..."/>
                        <button disabled={getInputName === ''} className="btn btn-outline-success mt-3" type="button" onClick={ () => setCurrentUserName(getInputName) } >Enviar</button>
                    </div>
                    <div className="ContenedorScore">
                        <p className="text-center fw-bold">Computer Score - {getNumberOfRoundsWonByTheComputer} {(getCurrentUserName !== '') ? getCurrentUserName : "Player"} Score - {getNumberOfRoundsWonByThePlayer}</p> 
                    </div>
                    <div className="ContenedorTabla">
                        <div className="table-wrapper-scroll-y my-custom-scrollbar">
                            <table className="table table-bordered table-striped mb-0">
                                <thead>
                                    <tr className="table-light">
                                    <th>Name</th>
                                    <th>Win Games</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {getRows}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div> 
            {defaultToastMessage}
        </div>
    )
}

export default ThreeToWin