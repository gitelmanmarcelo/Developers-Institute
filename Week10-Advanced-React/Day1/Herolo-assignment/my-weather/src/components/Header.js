import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';

const pages = ['Home', 'Favorites'];

function Header() {

  const handleClick = (e) => {
    console.log('here:',e.target.id);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            THE WEATHER APP
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } , justifyContent: 'flex-end'}}>
            {pages.map((page) => (
              <Button
                id={page}
                key={page}
                onClick={handleClick}
                sx={{ my: 2, color: 'white', display: 'block' }}
              ><Link to = {"/"+page}>
                {page}
                </Link>
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;