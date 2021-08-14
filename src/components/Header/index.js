import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../../themes/theme';
import logo from '../../images/BD_logo.jpeg'
import { NavLink } from 'react-router-dom';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function Header(props) {
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  return (
    <div className={classes.grow}>
      <ThemeProvider theme={theme.palette.primary}>
        <AppBar position="static">
          <Toolbar>
            <Grid container
              edge="start" >
              <Grid item  
              className={classes.grow}>
                <NavLink to="/">
                  <Avatar alt="Belle" src={logo} />
                </NavLink>
              </Grid>
              <Grid item>
                <Button onClick={() => { history.push('/about') }}>
                  About Me
                </Button>
                <Button onClick={() => { history.push('/projects') }}>
                  Projects
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};
