import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { withStyles, makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"
import Button from "../controls/Button"
import PassengerServices from "./PassengerServices"
import { useForm } from "../../hooks/useForm"

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow)

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
  btnEdit: {
    width: "10px",
  },
})

export default function PassengerTable() {
  const history = useHistory()
  const [passengers, setPassengers] = useState([])
  const [error, setError] = useState([])

  const classes = useStyles()
  const { getAllPassengers, deletePassenger } = PassengerServices

  function successCallback(data) {
    setPassengers(data)
  }

  function errorCallback(error) {
    setError(error)
  }

  useEffect(() => {
    getAllPassengers({ successCallback, errorCallback })
  }, [])

  function handleButtonEdit(id) {
    history.push(`/get-passenger/${id}`)
  }

  function handleButtonDelete(id) {
    deletePassenger({ id })
    const newPassengers = passengers.filter(passenger => passenger.id !== id)
    setPassengers(newPassengers)
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="left">Flight number</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {passengers.map((passenger) => (
            <StyledTableRow key={passenger.id}>
              <StyledTableCell component="th" scope="row">
                {passenger.id}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {passenger.name}
              </StyledTableCell>
              <StyledTableCell align="left">
                {passenger.flightNumber.toUpperCase()}
              </StyledTableCell>
              <StyledTableCell align="left">
                <Button
                  onClick={() => handleButtonEdit(passenger.id)}
                  size="small"
                  text={<EditIcon />}
                />
              </StyledTableCell>
              <StyledTableCell align="left">
                <Button
                  backgroundColor="error"
                  onClick={() => handleButtonDelete(passenger.id)}
                  size="small"
                  text={<DeleteIcon color="error"/>}
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
