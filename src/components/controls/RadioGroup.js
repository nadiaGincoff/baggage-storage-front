import { FormControl, FormLabel, RadioGroup as MuiRadioGroup, Radio } from "@material-ui/core"

export default function RadioGroup(props) {
  const { name, label, value, onChange, items } = props
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <MuiRadioGroup row name={name} value={value} onChange={onChange}>
        {items.map((item, index) => (
          <FormLabel
            value={item.id}
            control={<Radio />}
            label={item.title}
          ></FormLabel>
        ))}
      </MuiRadioGroup>
    </FormControl>
  )
}
