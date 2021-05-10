import { useEffect, useState } from "react"
import { Grid } from "@material-ui/core/"
import Container from "@material-ui/core/Container"
import { useForm, Form } from "../../hooks/useForm"
import { Paper } from "@material-ui/core"
import Controls from "../controls/Controls"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Title from "../TitleView"
import PassengerServices from "./PassengerServices"
import { useHistory } from "react-router-dom"
import { CollectionsBookmarkOutlined } from "@material-ui/icons"

const baggageTypes = () => [
  { id: "1", title: "Small" },
  { id: "2", title: "Medium" },
  { id: "3", title: "Large" },
]

const initialValues = {
  name: "",
  flightNumber: "",
  firstItem: "",
  secondItem: "",
  thirdItem: "",
}

const useStyles = makeStyles((theme) => ({
  pageContent: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1em",
    padding: theme.spacing(2),
  },
  containerTitle: {
    width: "50%",
  },
  containerBtn: {
    width: "40%",
  },
}))

export default function PassengerForm() {
  const [editPassenger, setEditPassenger] = useState(false)
  const [passengerId, setPassengerId] = useState(false)
  const history = useHistory()
  const path = history.location.pathname

  const { values, setValues, handleInputChange } = useForm(initialValues)

  useEffect(() => {
    if (path.includes(`/get-passenger`)) {
      setEditPassenger(true)
      const params = path.split("/")
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const passengerId = params[2]
      setPassengerId(passengerId)
    }
  }, [path])

  function successCallback(data) { 
    const firstItem = data.baggages[0] ? data.baggages[0].type : null
    const secondItem = data.baggages[1] ? data.baggages[1].type : null
    const thirdItem = data.baggages[2] ? data.baggages[2].type : null
    
    setValues({
      name: data.passenger.name,
      flightNumber: data.passenger.flightNumber,
      firstItem,
      secondItem,
      thirdItem,
    })
  }

  function errorCallback(error) {
    console.log(error)
  }

  useEffect(() => {
    PassengerServices.getPassengerById({
      id: passengerId,
      successCallback,
      errorCallback,
    })
  }, [passengerId])

  function validateForm() {
    const { name, flightNumber, firstItem, secondItem, thirdItem } = values

    let passengerValidation = name.length && flightNumber.length
    let baggageValidation = firstItem.length || secondItem.length || thirdItem.length

    let isValid = passengerValidation && baggageValidation
    return !isValid
  }

  const theme = useTheme()
  const classes = useStyles(theme)

  const createPassengerSubmit = (event) => {
    event.preventDefault()
    PassengerServices.newPassenger(values)
    console.log("🚀 ~ file: PassengerForm.js ~ line 103 ~ createPassengerSubmit ~ values", values)
    // history.push('/passengers')
  }

  const editPassengerSubmit = (event) => {
    event.preventDefault()
    PassengerServices.editPassenger({ id: passengerId, values })
    history.push('/passengers')
  }

  return (
    <Container disableGutters="true">
      <Paper className={classes.pageContent}>
        <Container className={classes.containerTitle}>
          <Title title={editPassenger ? `Update passenger` : `Add passenger`} />
        </Container>
        <Container className={classes.containerBtn} />
      </Paper>
      <Form id="passengerForm" onSubmit={createPassengerSubmit}>
        <Paper className={classes.pageContent}>
          <Grid container>
            <Grid item xs={6}>
              <Controls.Input
                variant="outlined"
                label="Fullname"
                name="name"
                value={values.name}
                onChange={handleInputChange}
              />
              <Controls.Input
                variant="outlined"
                label="Flight number"
                name="flightNumber"
                value={values.flightNumber}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <Controls.Select
                variant="outlined"
                label="First baggage"
                name="firstItem"
                value={values.firstItem}
                onChange={handleInputChange}
                options={baggageTypes()}
              />
              <Controls.Select
                variant="outlined"
                label="Second baggage"
                name="secondItem"
                value={values.secondItem}
                onChange={handleInputChange}
                options={baggageTypes()}
              />
              <Controls.Select
                variant="outlined"
                label="Third baggage"
                name="thirdItem"
                value={values.thirdItem}
                onChange={handleInputChange}
                options={baggageTypes()}
              />
              <Controls.Button
                onClick={(e) =>
                  editPassenger
                    ? editPassengerSubmit(e)
                    : createPassengerSubmit(e)
                }
                type="submit"
                text={editPassenger ? `update` : `submit`}
                form="passengerForm"
                disabled={validateForm()}
              />
            </Grid>
          </Grid>
        </Paper>
      </Form>
    </Container>
  )
}
