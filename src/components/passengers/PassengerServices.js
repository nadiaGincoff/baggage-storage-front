import API from "../../config/api"

async function getAllPassengers({ successCallback, errorCallback }) {
  try {
    const data = await API.getAllPassengers()
    successCallback(data.data.data)
  } catch (e) {
    const error = typeof e === `string` ? e : `Error al eliminar módulo`
    errorCallback(error)
  }
}

const PassengerServices = {
  getAllPassengers,
}

export default PassengerServices
