import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';



function Footer() {


  return (
    <Box sx={{ pb: 7 }}>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation showLabels>
            <BottomNavigationAction label="Github" icon={<a href="https://github.com/vntero" target="_blank" rel="noreferrer"><img alt="github" src="github.png" height={20} width={20}/></a>} />
            <BottomNavigationAction label="LinkedIn" icon={<a href="https://www.linkedin.com/in/vntero/" target="_blank" rel="noreferrer"><img alt="linkedin" src="linkedin.png" height={20} width={20}/></a>} />
            <BottomNavigationAction label="Email" icon={<a href="mailto:collab@vntero.com"><img alt="email" src="email.png" height={20} width={20}/></a>} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}


export default Footer

