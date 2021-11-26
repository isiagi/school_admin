import React from 'react';
import { Mail } from '@mui/icons-material';
import { AppBar, Avatar, Badge, InputBase, Toolbar } from '@mui/material';
import Notifications from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import { Box, styled } from '@mui/system';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu'

const BoxWrapper = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  background: 'white',
  height: '2rem',
  width: '30rem',
  borderRadius: theme.shape.borderRadius
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '150px',
}));

function Nav() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <AppBar position="fixed">
        <BoxWrapper>
          <Box>
            <h1>School Admin</h1>
          </Box>
          <Box>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Box>
          <IconWrapper>
            <Badge>
              <Mail />
            </Badge>
            <Badge>
              <Notifications />
            </Badge>
            <div>
            <IconButton onClick={handleMenu}>
            <Avatar />
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
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Log Out</MenuItem>
              </Menu>
            </div>
          </IconWrapper>
        </BoxWrapper>
      </AppBar>
    </div>
  );
}

export default Nav;
