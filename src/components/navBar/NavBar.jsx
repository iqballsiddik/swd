import React from 'react';
// import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { RootContext } from '../router/Routers';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import './NavBar.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    fontFamily: " Roboto, Helvetica, Arial, sans- serif"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  colorBar: {
    backgroundColor: '#ffffff',
    color: '#757575'
  },
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
}));

const StyledBadge1 = withStyles(theme => ({
  badge: {
    right: -3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px'
  }
}))(Badge);

export default function NavBar() {
  const classes = useStyles();
  const imgLogo = './assets/img/logo-swd.JPG';
  return (
    <div className={classes.root}>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">
          <img src={imgLogo} width="180px" height="70px" />
        </Link >
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Button color="inherit">
                <Link to="/" className="link">
                  Home
                </Link>
              </Button>
            </li>
            <li className="nav-item">
              <Button color="inherit">
                <Link to="/hijab" className="link">
                  Hijab
                </Link>
              </Button>
            </li>
            <li className="nav-item">
              <Button color="red">
                <Link to="/about" className="link">
                  About
                </Link>
              </Button>
            </li>
            <li className="nav-item">
              <BtnDrawer className="iconTrolly" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

const BtnDrawer = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false
  });
  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };
  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['Inbox', 'Payment', 'Send email'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <LocalAtmIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <RootContext.Consumer>
        {value => {
          return (
            <Box m={1}>
              <IconButton
                aria-label="cart"
                onClick={toggleDrawer('right', true)}
              >
                <StyledBadge1 badgeContent={value.order} color="primary">
                  <ShoppingCartIcon />
                </StyledBadge1>
              </IconButton>
              <SwipeableDrawer
                anchor="right"
                open={state.right}
                onClose={toggleDrawer('right', false)}
                onOpen={toggleDrawer('right', true)}
              >
                {sideList('right')}
              </SwipeableDrawer>
            </Box>
          );
        }}
      </RootContext.Consumer>
    </div>
  );
};
