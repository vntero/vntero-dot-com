import { Link } from "react-router-dom"
import React from "react"

//MUI components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@material-ui/icons/Menu'
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const pages = [
<Link style={{textDecoration: 'none', color: 'black'}} to="/"><Button sx={{ my: 1, display: 'block', textTransform: 'lowercase' }}>About</Button></Link>, 
<Link style={{textDecoration: 'none', color: 'black'}} to="/projects"><Button sx={{ my: 1, display: 'block', textTransform: 'lowercase' }}>Projects</Button></Link>, 
<Link style={{textDecoration: 'none', color: 'black'}} to="/contact"><Button sx={{ my: 1, display: 'block', textTransform: 'lowercase' }}>Contact</Button></Link>,
<Link style={{textDecoration: 'none', color: 'black'}} to="/unrelated"><Button sx={{ my: 1, display: 'block', textTransform: 'lowercase' }}>Unrelated</Button></Link>
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar elevation={1} position="sticky" style={{ background: 'white', color: 'black'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Link to="/"><img alt="vntero.com" src="aries.png" height={35} width={35}/></Link> 
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                  sx={{"&.MuiButtonBase-root:hover": {bgcolor: "transparent"}}} 
                  key={page} onClick={handleCloseNavMenu}>
                    {page}
                </MenuItem>

              ))}
            </Menu>
          </Box>

          <Typography sx={{display: { xs: 'flex', md: 'none' }}}>
            <Link to="/"><img alt="vntero.com" src="aries.png" height={35} width={35}/></Link> 
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Typography 
                key={page}
                onClick={handleCloseNavMenu}
              >
                {page}
              </Typography>
            ))}
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
