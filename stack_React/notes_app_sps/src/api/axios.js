import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000/api_notes_app',
    withCredentials:true
})
export default instance;