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

async function newPassenger(values) {
  const { name, flightNumber, firstItem, secondItem, thirdItem } = values
  try {
    const data = await API.newPassenger({
      name,
      flightNumber,
      firstItem,
      secondItem,
      thirdItem,
    })
    console.log(`usuario creado`)
  } catch (error) {
    console.log(error)
  }
}

async function getPassengerById({ id, successCallback, errorCallback }) {
  try {
    const data = await API.getPassengerById(id)
    successCallback(data.data.data)
  } catch (error) {
    console.log(error)
    errorCallback(error)
  }
}

async function editPassenger({ id, values, successCallback, errorCallback }) {
  try {
    const { name, flightNumber, firstItem, secondItem, thirdItem } = values

    const editedPassenger = await API.editPassenger({
      id,
      name,
      flightNumber,
      firstItem,
      secondItem,
      thirdItem,
    })
    console.log("🚀 ~ file: PassengerServices.js ~ line 51 ~ editPassenger ~ editedPassenger", editedPassenger)
    // successCallback(editedPassenger)
  } catch (error) {
    console.log(error)
    errorCallback(error)
  }
}

async function deletePassenger({ id, successCallback, errorCallback }) {
  console.log("🚀 ~ file: PassengerServices.js ~ line 60 ~ deletePassenger ~ id", id)
  try {
    const data = await API.deletePassenger(id)
    // successCallback(data.data.data)
  } catch (error) {
    console.log(error)
    // errorCallback(error)
  }
}

const PassengerServices = {
  getAllPassengers,
  newPassenger,
  getPassengerById,
  editPassenger,
  deletePassenger,
}

export default PassengerServices
