import API from '../../config/api'

async function getAllBaggages({ successCallback, errorCallback }) {
  try {
    const data = await API.getAllBaggages()
    successCallback(data)
  } catch (e) {
    const error = typeof e === `string` ? e : `Error al eliminar módulo`
    errorCallback(error)
  }
}

const BaggagesServices = {
    getAllBaggages
}

export default BaggagesServices