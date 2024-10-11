import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:4000'
})

export default http