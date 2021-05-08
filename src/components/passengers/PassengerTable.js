import { useState, useEffect } from "react"
import { withStyles, makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"

import PassengerServices from "./PassengerServices"

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
})

export default function PassengerTable() {
  const [passengers, setPassengers] = useState([])
  const [error, setError] = useState([])

  const classes = useStyles()
  const { getAllPassengers } = PassengerServices

  function successCallback(data) {
    setPassengers(data)
  }

  function errorCallback(error) {
    setError(error)
  }

  useEffect(() => {
    getAllPassengers({ successCallback, errorCallback })
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead> 
          <TableRow>
            <StyledTableCell>Nombre de pasajero</StyledTableCell>
            <StyledTableCell align="right">Número de vuelo</StyledTableCell>
            <StyledTableCell align="right">Equipaje en storage</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {passengers.map((passenger) => (
            <StyledTableRow key={passenger.id}>
              <StyledTableCell component="th" scope="row">
                {passenger.name}
              </StyledTableCell>
              <StyledTableCell align="right">
                {passenger.flightNumber}
              </StyledTableCell>
              <StyledTableCell align="right">
                {passenger.baggage ? passenger.baggage : `Sin equipaje en storage`}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
