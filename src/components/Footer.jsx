import * as React from 'react'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/system'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'

const OvalPaper = styled(Paper)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  left: '50%',
  transform: 'translateX(-50%)',
  width: 200,
  height: 60,
  borderRadius: 30,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(1),
}))

const List = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  display: 'flex',
  margin: 0,
  padding: 0,
  '& li': {
    margin: `0 ${theme.spacing(1)}px`,
  },
}))

function Footer() {
  const [value, setValue] = React.useState(0)
  return (
    <Box>
      <CssBaseline />
      <OvalPaper elevation={3}>
        <List>
        <BottomNavigation showLabels value={value} onChange={(event, newValue) => { setValue(newValue)}}>
        <BottomNavigationAction label="Home" />
        <BottomNavigationAction label="Projects"/>
       </BottomNavigation>
        </List>
      </OvalPaper>
    </Box>
  )
}

export default Footer
