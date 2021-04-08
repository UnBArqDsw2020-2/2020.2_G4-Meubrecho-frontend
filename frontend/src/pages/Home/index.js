import React from 'react';
import clsx from 'clsx';
import { Router, Route } from 'react-router-dom';
import Logo from '../../assets/cart.png';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
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
  ChevronLeft as ChevronLeftIcon
} from '@material-ui/icons';

import Loja from '../Loja';
import Venda from '../Venda';
import Favoritos from '../Favoritos';
import history from '../../services/history';
import Pages from './pages'
import {PAGE_FAVORITOS, PAGE_VENDA, PAGE_LOJA} from './consts'

const optionsId = ['favoritosId', 'vendaId', 'lojaId'];
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  logo: {
    marginRight: '10px',
    height: '50px',
    width: '50px'
  },
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

const listMenu = (setPage, page) => {
  const list = [PAGE_FAVORITOS, PAGE_VENDA, PAGE_LOJA].map((text, index) => {
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
        <div className={classes.toolbar}/>
					<Pages page={page}/>
      </main>
    </div>
  );
}
