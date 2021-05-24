import React from 'react';
import {NavContainer} from './nav.styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

export const TopNav = () => {
  return <NavContainer>
    <AppBar />
    <Typography variant="h6" noWrap>
            Brain Itch
    </Typography>
  </NavContainer>;
};
