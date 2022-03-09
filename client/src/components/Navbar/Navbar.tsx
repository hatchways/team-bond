import React, { ReactNode, useState } from 'react';
import clsx from 'clsx';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import {
  Divider,
  Grid,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem as DropdownMenuItem,
} from '@mui/material';

import lovingSitterLogo from '../../images/logo.svg';
import { useStyles } from './useStyles';
import { NavLink, useLocation } from 'react-router-dom';
import { Settings, Logout, Person } from '@mui/icons-material';
import { demoRole } from '../../routes/AppRoutes';
import { IMenuItemRule, MenuResolver } from '../../routes';

// TODO integrate with real role from user
const menuItems: IMenuItemRule[] = [
  ...MenuResolver.generateRootMenuRules(demoRole).filter((rule) => !rule.hide),
  ...MenuResolver.getAuthMenuRules(),
];

const MenuItem: React.FC<{ path: string; component?: JSX.Element; label?: string }> = ({ path, component, label }) => {
  const classes = useStyles();

  return (
    <Grid key={path} sx={{ textAlign: 'center', zIndex: 2 }} xs={2} justifySelf="flex-end" item>
      <NavLink className={classes.navbarItem} to={path}>
        {component && component} {label && label}
      </NavLink>
    </Grid>
  );
};

const Navbar: React.FC = () => {
  const location = useLocation();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { loggedInUser, logout } = useAuth();
  const { socket } = useSocket();
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    socket ? socket.emit('logout') : null;
    handleClose();
    logout();
  };

  const renderMenuItems = () => {
    // TODO: conditionally render based on profile type
    return menuItems.map((menu) => {
      if (menu.authenticated) {
        return loggedInUser && <MenuItem key={menu.path} path={menu.path} label={menu.label} />;
      } else {
        return !loggedInUser && <MenuItem key={menu.path} path={menu.path} component={menu.component} />;
      }
    });
  };

  return (
    <Grid
      className={clsx(classes.navbar, location.pathname === '/' && classes.transparentNavbar)}
      justifyContent="space-between"
      alignItems="center"
      container
    >
      <Grid xs={4} md={6} item>
        <img className={classes.navbarLogo} src={lovingSitterLogo} />
      </Grid>
      <Grid xs={8} md={6} item>
        <Grid container alignItems="center" gap={2} justifyContent="flex-end" >
          {renderMenuItems()}
          {loggedInUser && (
            <Grid xs={2} item >
              <>
                <IconButton
                  size="large"
                  aria-label="account profile picture"
                  aria-controls="menu-navbar"
                  arais-haspopup="true"
                  onClick={handleMenuOpen}
                  color="inherit"
                >
                  <img style={{ width: 50 }} src={`https://robohash.org/${loggedInUser.email}`} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'bottom',
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
                  <DropdownMenuItem component={NavLink} to="/profile/settings" onClick={handleClose}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Settings</ListItemText>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Person fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Profile</ListItemText>
                  </DropdownMenuItem>
                  <Divider />
                  <DropdownMenuItem onClick={handleLogout}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Logout</ListItemText>
                  </DropdownMenuItem>
                </Menu>
              </>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export { Navbar };
