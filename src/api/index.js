import axios from "axios";

const ApiInstance = axios.create({
    baseURL: 'http://45.138.158.240:4040/api',
    headers:{
        'Content-type': 'application/json'
    }
})

export default ApiInstance