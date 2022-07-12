/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import Standar from "./Estandar"
import ToastMessage from "../others/ToastMessage"

const ThreeToWin = () => {
    const [getGameStatus, setGameStatus] = useState(false)
    const [getInputName, setInputName] = useState('')
    const [getCurrentUserName, setCurrentUserName] = useState('')
    const [getNumberOfRoundsWonByTheComputer, addNewRoundWonByTheComputer] = useState(0)
    const [getNumberOfRoundsWonByThePlayer, addNewRoundWonByThePlayer] = useState(0)
    const [getRows , setRows] = useState<JSX.Element[] | never[]>([])
    const [getShowFlag, setShowFlag] = useState('hide')
    const [getMessage, setMessage] = useState('')
    const defaultToastMessage = <ToastMessage getMessage={getMessage} getShowFlag={getShowFlag} setShowFlag={setShowFlag}/>

    useEffect(() => {
        const restablecerPuntajes = () => {
            addNewRoundWonByThePlayer(0)
            addNewRoundWonByTheComputer(0)
        }

        if(getNumberOfRoundsWonByThePlayer === 3) {
            restablecerPuntajes()
            setMessage(`El ganador es ${getCurrentUserName}`)
        } else if(getNumberOfRoundsWonByTheComputer === 3) {
            restablecerPuntajes()
            setMessage(`El ganador es Computer`)
        }

    },[getNumberOfRoundsWonByTheComputer, getNumberOfRoundsWonByThePlayer])

    useEffect(() => {
        if(getMessage !== '') {
            setShowFlag('show')
        }
    }, [getMessage])


    const registerNewUserName = () => {
        setCurrentUserName(getInputName)
        Api.setPlayer(getInputName).then((data) => setRows(data.result.map(userInfo => <tr className="table-light"><td>{userInfo.name}</td><td>userInfo.score</td></tr>)))
        setInputName('')
    }

    return(
            <div className="ContenedorMejorDeCinco">
                <Standar contabilizarRondaGanadoraJugador={addNewRoundWonByThePlayer} contabilizarRondaGanadoraComputadora={addNewRoundWonByTheComputer}/>
                <div className="ContenedorDatosDeSession">
                    <div className="ContenedorNombreDeUsuario">
                        <input value={getInputName} onChange={(event) => setInputName(event.target.value)} maxLength={100} placeholder="Ingrese su nombre ..."/>
                        <button disabled={getInputName === '' || getGameStatus} className="btn btn-outline-success mt-3" type="button" onClick={ () => registerNewUserName() } >Enviar</button>
                    </div>
                    <div className="ContenedorScore">
                        <p className="text-center fw-bold">Computer Score - {getNumberOfRoundsWonByTheComputer} {(getCurrentUserName !== '') ? getCurrentUserName : "Player"} Score - {getNumberOfRoundsWonByThePlayer}</p> 
                    </div>
                    <div className="ContenedorTabla">
                        <div className="table-wrapper-scroll-y my-custom-scrollbar">
                            <table className="table table-bordered table-striped mb-0">
                                <thead>
                                    <tr className="table-light">
                                    <th>Nombre</th>
                                    <th>Partidas Ganadas</th>
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