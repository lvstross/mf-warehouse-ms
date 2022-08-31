import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Container, Title } from './styled';
import SideBar from '../sideBar/SideBar';

export const Header = () => {
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <SideBar />
          <Title variant="h6">
            Warehouse Management System
          </Title>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;
