import Typography from "@material-ui/core/Typography"

export default function Title({ title }) {
  return (
    <Typography
      variant="h5"
      color="primary"
      component="h3"
    >
      {title}
    </Typography>
  )
}
