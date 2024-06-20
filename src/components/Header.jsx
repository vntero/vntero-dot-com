import * as React from 'react'
import Box from '@mui/material/Box'
import FormControlLabel from '@mui/material/FormControlLabel'
import { HeaderPaper, MaterialUISwitch } from './Helpers'

function Header({ toggleDarkMode, toggleDarkTheme }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <HeaderPaper>
        <FormControlLabel
          control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
          checked={toggleDarkMode}
          onChange={toggleDarkTheme}
        />
      </HeaderPaper>
    </Box>
  )
}

export default Header
