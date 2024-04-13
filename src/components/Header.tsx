'use client'

import React from 'react';
import { AppBar, Toolbar, Link, Box, Typography, Button, Stack, Container, IconButton, Menu, MenuItem } from '@mui/material';
import Image from "next/image";
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import logo from '../images/logo.jpeg';

const Header: React.FC = () => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="transparent" sx={{ marginBottom: 4 }}>
      <Container maxWidth={false}>
        <Toolbar disableGutters sx={{ padding: '0px' }}>
          {/* <Image
            src={logo}
            alt="logo"
            width={100}
            height={100}
            style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover', objectPosition: 'center' }}
          /> */}
          <Link href="/" color="#000" underline="none">
            <Typography fontSize={{ xs: 22, sm: 28, md: 32, lg: 42 }}>
              Loredo Professional Remodeling
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          {isMobile ? (
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={() => { router.push("/"); handleClose(); }}>Home</MenuItem>
                <MenuItem onClick={() => { router.push("/about"); handleClose(); }}>About Us</MenuItem>
                <MenuItem onClick={() => { router.push("/services"); handleClose(); }}>Services</MenuItem>
                <MenuItem onClick={() => { router.push("/quote"); handleClose(); }}>Get A Quote</MenuItem>
              </Menu>
            </>
          ) : (
            <Stack sx={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end'}} direction={'row'} spacing={2}>
              <Link href="/" color="#000" underline="none">
                <Typography fontSize={{ xs: 10, sm: 15, md: 20, lg: 22 }}>Home</Typography>
              </Link>
              <Link href="/about" color="#000" underline="none">
                <Typography fontSize={{ xs: 10, sm: 15, md: 20, lg: 22 }}>About Us</Typography>
              </Link>
              <Link href="/services" color="#000" underline="none">
                <Typography fontSize={{ xs: 10, sm: 15, md: 20, lg: 22 }}>Services</Typography>
              </Link>
              <Button variant="contained" color="primary" onClick={() => router.push("/quote")}>
                <Typography fontSize={{ xs: 10, sm: 15, md: 20, lg: 22 }}>Get a Quote</Typography>
              </Button>
            </Stack>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
