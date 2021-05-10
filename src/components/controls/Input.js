import { TextField } from "@material-ui/core"

export default function Input(props) {
  const { label, name, value, onChange } = props

  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
    />
  )
}
