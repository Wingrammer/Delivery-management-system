import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.API_BASE_URL || 'http://localhost:8000',
})

export default instance
