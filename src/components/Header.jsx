import * as React from 'react'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import { Link } from 'react-router-dom'
import { OvalPaper } from './Helpers'
import { List } from './Helpers'
import FormControlLabel from '@mui/material/FormControlLabel'
import { MaterialUISwitch } from './Helpers'

function Header({ toggleDarkMode, toggleDarkTheme }) {
  const [value, setValue] = React.useState(0)

  return (
    <Box>
      <CssBaseline />
      <OvalPaper elevation={3}>
        <List>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue)
            }}
          >
            <BottomNavigationAction label="Hugo" component={Link} to="/" />
            <BottomNavigationAction
              label="Projects"
              component={Link}
              to="/projects"
            />
          </BottomNavigation>
        </List>
        <FormControlLabel
          control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
          checked={toggleDarkMode}
          onChange={toggleDarkTheme}
        />
      </OvalPaper>
    </Box>
  )
}

export default Header
