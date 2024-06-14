import * as React from 'react'
import { Typography, CardActions, Button, Paper } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'

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
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
  elevation: 0,
}))