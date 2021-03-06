import Axios from 'axios'

const post = (url : string, body : {}, config : {}) => Axios.post(url,body,config).then(response => response)
const apiURL = "http://localhost:3001"


const setPlayer = (getInputName : string) => post(`${apiURL}/setPlayer`, {"name": getInputName}, {})
const registerNewWin = (getInputName : string) => post(`${apiURL}/registerNewWin`, {"name": getInputName}, {})

const Api = {
    setPlayer,
    registerNewWin,
}

export default Api