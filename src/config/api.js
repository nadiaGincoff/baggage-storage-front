import axios from "axios"

const API = {}
const baseURL = "http://localhost:4001/api/v1"

const axiosInstance = axios.create({
  baseURL,
  validateStatus() {
    return true
  },
})

// Home
API.getHome = () => axiosInstance.get("/")

// Clients
API.newClient = () => axiosInstance.post("/new-client")

API.getAllPassengers = () => axiosInstance.get("/passengers")

export default API
