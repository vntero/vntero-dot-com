import * as React from 'react'
import Box from '@mui/material/Box'
import FormControlLabel from '@mui/material/FormControlLabel'
import { MaterialUISwitch } from './Helpers'
import AppBar from '@mui/material/AppBar'

function Header({ toggleDarkMode, toggleDarkTheme }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <FormControlLabel
          control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
          checked={toggleDarkMode}
          onChange={toggleDarkTheme}
        />
      </AppBar>
    </Box>
  )
}

export default Header
