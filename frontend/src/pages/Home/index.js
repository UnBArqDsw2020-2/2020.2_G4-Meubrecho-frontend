import React from 'react';
import clsx from 'clsx';
import history from '../../services/history';
import { Router, Route, Redirect } from 'react-router-dom';
import Logo from '../../assets/cart.png';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Button,
  List,
  ListItemText,
  ListItemIcon,
  ListItem,
  IconButton,
  Divider,
  Typography,
  CssBaseline,
  Toolbar,
  AppBar,
  Drawer
} from '@material-ui/core';
import {
  ShoppingCart as ShoppingCartIcon,
  Stars as StarsIcon,
  Storefront as StorefrontIcon,
  ChevronRight as ChevronRightIcon,
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  Add as AddIcon
} from '@material-ui/icons';

import Pages from './pages';
import { PAGE_FAVORITOS, PAGE_VENDA, PAGE_LOJA, PAGE_ADD_ITEM } from './consts';
import useStyles from './styles';

const optionsId = ['favoritosId', 'vendaId', 'lojaId', 'addId'];
const drawerWidth = 240;

const listMenu = (setPage, page) => {
  const list = [PAGE_FAVORITOS, PAGE_VENDA, PAGE_LOJA, PAGE_ADD_ITEM].map((text, index) => {
    let name;
    let icon;
    switch (optionsId[index]) {
      case 'favoritosId':
        name = 'Favoritos';
        icon = <StarsIcon />;
        break;
      case 'vendaId':
        name = 'Venda';
        icon = <ShoppingCartIcon />;
        break;
      case 'lojaId':
        name = 'Loja';
        icon = <StorefrontIcon />;
        break;
      case 'addId':
        name = 'Adicionar Produto';
        icon = <AddIcon />;
        break;
      default:
        name = '';
        break;
    }
    return (
      <List key={text}>
        <ListItem
          button
          onClick={() => {
            if (text !== page) {
              setPage(text);
            }
          }}
          selected={text === page}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={name} />
        </ListItem>
      </List>
    );
  });
  return list;
};

function logout() {
  console.log('logut');
  localStorage.clear();
	history.push('/')
}

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState('');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}>
            <MenuIcon />
          </IconButton>
          <img className={classes.logo} src={Logo} alt='logo meubrecho' />
          <Typography variant='h6' noWrap>
            Meu brechó
          </Typography>
          <Button onClick={() => logout()} className={classes.logoutButton}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}>
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        {listMenu(setPage, page)}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Pages page={page} />
      </main>
    </div>
  );
}
