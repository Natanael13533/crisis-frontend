import * as React from 'react';
import { Link } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import { Apps } from '@mui/icons-material';

export const mainListItems = (
  <React.Fragment>
    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </Link>
    <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="About Us" />
      </ListItemButton>
    </Link>
    <Link to="/news" style={{ textDecoration: 'none', color: 'inherit' }}>
      <ListItemButton>
        <ListItemIcon>
          <Apps />
        </ListItemIcon>
        <ListItemText primary="News" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);