import { useState } from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues)

  function handleInputChange(e) {
    const {name, value} = e.target
      
    setValues({
      ...values,
      [name]: value,
    })
  }

  return { values, setValues, handleInputChange }
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "95%",
      margin: theme.spacing(1),
    },
  },
}))

export function Form(props) {
  const theme = useTheme()
  const classes = useStyles(theme)
  return (
    <form className={classes.root} autoComplete="off">
      {props.children}
    </form>
  )
}
