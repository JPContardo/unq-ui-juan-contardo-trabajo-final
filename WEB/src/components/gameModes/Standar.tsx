/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import pathFromComputerWinAnimation from '../../images/Computer_Win.gif'
import pathFromPlayerWinAnimation from '../../images/Player_Win.gif'
import pathFromNobodyWinAnimation from '../../images/Nobody_Win.gif'
import pathFromInitialAnimation from '../../images/Inicial.png'
import * as GameConfig from '../../extras/GameConfig'
import { Play } from '../../extras/Play';

const Standar = ({buttonStatus, addNewRoundWonByThePlayer , addNewRoundWonByTheComputer} : {buttonStatus: string, addNewRoundWonByThePlayer : React.Dispatch<React.SetStateAction<number>>, addNewRoundWonByTheComputer: React.Dispatch<React.SetStateAction<number>>}) => {
    const [getCurrentAnimationPath, setCurrentAnimationPath] = useState(pathFromInitialAnimation)
    const [getCurrentPlay, setCurrentPlay] = useState<Play | undefined>()
    const [getButtonStatus, setButtonStatus] = useState(buttonStatus)
    
    useEffect(() => {
        const determineWinner = (rivalPlay: Play) => {

            if(getCurrentPlay?.ganaEstaRonda(rivalPlay)) {
                addNewRoundWonByThePlayer((prevState => prevState + 1))
                return pathFromPlayerWinAnimation
            } 
            
            if(getCurrentPlay?.empataEstaRonda(rivalPlay)) {
                return pathFromNobodyWinAnimation
            }  
            addNewRoundWonByTheComputer((prevState => prevState + 1))
            return pathFromComputerWinAnimation
        }

        if(!!getCurrentPlay) {
            setButtonStatus('disabled')
            const pcPlay = GameConfig.recordedPlays[~~(Math.random() * GameConfig.recordedPlays.length)]
            setCurrentAnimationPath(require(`../../images/${getCurrentPlay.name}VS${pcPlay.name}.gif`))
            setTimeout(() => setCurrentAnimationPath(determineWinner(pcPlay)), 6000);
            setTimeout(() => {setCurrentAnimationPath(pathFromInitialAnimation); setCurrentPlay(undefined); setButtonStatus('active')}, 12000);
        }
    },[getCurrentPlay])

    useEffect(() => {
        if(buttonStatus !== 'disabled') {
            setButtonStatus('')
        }
    },[buttonStatus])

    return(
            <div className="MarcoMaquina">
                <img className="Animacion" src={getCurrentAnimationPath} alt="Juego"/>
                <div className="Botonera">
                    <div className="btn-group btn-group-toggle" data-toggle="buttons" id="BotoneraSuperior">
                        <button type="button" className={`btn btn-danger btn-sm ${getButtonStatus}`} onClick={ () => setCurrentPlay(GameConfig.getPiedra()) }>Piedra</button>
                        <button type="button" className={`btn btn-danger btn-sm ${getButtonStatus}`} onClick={ () => setCurrentPlay(GameConfig.getTijera()) }>Tijera</button>
                        <button type="button" className={`btn btn-danger btn-sm ${getButtonStatus}`} onClick={ () => setCurrentPlay(GameConfig.getPapel()) }>Papel</button>
                    </div>
                    <div className="btn-group btn-group-toggle" data-toggle="buttons" id="BotoneraInferior">
                        <button type="button" className={`btn btn-danger btn-sm ${getButtonStatus}`} onClick={ () => setCurrentPlay(GameConfig.getLagarto()) }>Lagarto</button>
                        <button type="button" className={`btn btn-danger btn-sm ${getButtonStatus}`} onClick={ () => setCurrentPlay(GameConfig.getSpock()) }>Spock</button>
                    </div>
                </div>
            </div>)
}

export default Standar
















