import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, Drawer } from '@material-ui/core';
import { Dashboard as DashboardIcon, ExitToApp as ExitToAppIcon ,Phone,GroupOutlined,Person} from '@material-ui/icons';
import '../styles/Sidebar.css';

const Sidebar = () => (
  <Drawer variant="permanent" className="sidebar">
    <List>
      <ListItem button component={Link} to="/dashboard" >
        <ListItemIcon><DashboardIcon /></ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/pastor">
        <ListItemIcon><Person /></ListItemIcon>
        <ListItemText primary="Pastor Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/operator">
        <ListItemIcon><Phone /></ListItemIcon>
        <ListItemText primary="Operator Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/user">
        <ListItemIcon><GroupOutlined /></ListItemIcon>
        <ListItemText primary="User Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/login">
        <ListItemIcon><ExitToAppIcon /></ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </List>
  </Drawer>
);

export default Sidebar;
