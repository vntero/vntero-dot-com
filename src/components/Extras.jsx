export const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        "We must cultivate our garden"
      </Typography>
    </CardContent>
    <CardActions>
      <Button size='small'>Quotate</Button>
    </CardActions>
  </React.Fragment>
)

export const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 320,
  height: 320,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
  elevation: 0,
}))