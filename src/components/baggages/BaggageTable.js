import { useState, useEffect } from "react"
import { withStyles, makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"

import BaggagesServices from "./BaggagesServices"

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

const baggageTypes = {
  1: { title: "Small" },
  2: { title: "Medium" },
  3: { title: "Large" },
}

export default function BaggageTable() {
  const [baggages, setBaggages] = useState([])
  const [error, setError] = useState([])

  const classes = useStyles()
  const { getAllBaggages } = BaggagesServices

  function successCallback(data) {
    setBaggages(data.data.baggages)
  }

  function errorCallback(error) {
    setError(error)
  }

  useEffect(() => {
    getAllBaggages({ successCallback, errorCallback })
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Item</StyledTableCell>
            <StyledTableCell align="left">Type</StyledTableCell>
            <StyledTableCell align="left">Passenger ID</StyledTableCell>
            <StyledTableCell align="left">Created</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {baggages.map((baggage) => (
            <StyledTableRow key={baggage.id}>
              <StyledTableCell component="th" scope="row">
                {baggage.id}
              </StyledTableCell>
              <StyledTableCell align="left">{baggageTypes[baggage.type].title}</StyledTableCell>
              <StyledTableCell align="left">{baggage.passengerId}</StyledTableCell>
              <StyledTableCell align="left">{baggage.updatedAt}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
