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
API.getHome = () => axiosInstance.get(`/`)

// Baggages 
API.getAllBaggages = () => axiosInstance.get(`/baggages`)

// Passengers
API.getAllPassengers = () => axiosInstance.get(`/passengers`)

API.newPassenger = ({ name, flightNumber, firstItem, secondItem, thirdItem }) =>
  axiosInstance.post("/new-passenger", null, {
    params: { name, flightNumber, firstItem, secondItem, thirdItem },
  })

API.getPassengerById = (id) => axiosInstance.get(`/get-passenger/${id}`)

API.editPassenger = ({ id, name, flightNumber, firstItem, secondItem, thirdItem }) =>
  axiosInstance.post(`/edit-passenger/${id}`, null, {
    params: {
      name,
      flightNumber,
      firstItem,
      secondItem,
      thirdItem,
    },
  })

API.deletePassenger = (id) => axiosInstance.post(`/delete-passenger/${id}`)

export default API
