import * as React from 'react'
import Box from '@mui/material/Box'
import FormControlLabel from '@mui/material/FormControlLabel'
import { MaterialUISwitch } from './Helpers'

function Header({ toggleDarkMode, toggleDarkTheme }) {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
      }}
    >
      <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
        checked={toggleDarkMode}
        onChange={toggleDarkTheme}
      />
    </Box>
  )
}

export default Header
