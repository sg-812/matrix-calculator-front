import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Container,
  Box,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { CatchingPokemon } from "@mui/icons-material";
import { Link } from "react-router-dom";

import "../StyleModule/layout.css";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <CatchingPokemon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Matrix App
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Link to="/">
              <Button color="inherit">Register</Button>
            </Link>
            <Link to="/sign-in">
              <Button color="inherit">Login</Button>
            </Link>
            <Link to="/profile">
              <Button color="inherit">Profile</Button>
            </Link>
            <Link to="/create-matrix">
              <Button color="inherit">Create-matrix</Button>
            </Link>
            <Link to="/view-matrix">
              <Button color="inherit">View-matrix</Button>
            </Link>
          </Stack>
          {/* for menu icon */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: "block", md: "none" } }}
            onClick={handleOpenNavMenu}
          >
            <MenuIcon />
          </IconButton>
          {/* box for menu list */}
          <Box>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="left" component="div">
                  <Stack direction="column" spacing={2}>
                    <Link to="/">
                      <Button color="primary">Register</Button>
                    </Link>
                    <Link to="/sign-in">
                      <Button color="primary">Login</Button>
                    </Link>
                    <Link to="/profile">
                      <Button color="primary">Profile</Button>
                    </Link>
                    <Link to="/create-matrix">
                      <Button color="primary">Create-matrix</Button>
                    </Link>
                    <Link to="/View-matrix">
                      <Button color="primary">View-matrix</Button>
                    </Link>
                  </Stack>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
