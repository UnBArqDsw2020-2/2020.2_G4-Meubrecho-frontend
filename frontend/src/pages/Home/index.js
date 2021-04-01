import React from 'react';
import clsx from 'clsx';
import { Router, Route } from 'react-router-dom';
import Logo from '../../assets/cart.png';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StorefrontIcon from '@material-ui/icons/Storefront';
import StarsIcon from '@material-ui/icons/Stars';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStyles } from './styles';

import Loja from '../Loja'
import Venda from '../Venda'
import Favoritos from '../Favoritos'
import history from '../../services/history';
const optionsId = ["favoritosId", "vendaId", "lojaId"];


const listMenu = (location, histor) => {
	var actualLocation = location
	if(location.location !== undefined)
		actualLocation = location.location
  const list = ["favoritos", "venda", "loja"].map(
    (text, index) => {
      let name;
      let icon;
      switch (optionsId[index]) {
        case "favoritosId":
          name = "Favoritos";
          icon = <StarsIcon />;
          break;
        case "vendaId":
          name = "Venda";
          icon = <ShoppingCartIcon />;
          break;
        case "lojaId":
          name = "Loja";
          icon = <StorefrontIcon />;
          break;
        default:
          name = "";
          break;
      }
      return (
        <React.Fragment key={text}>
          <ListItem
            button
            onClick={() => {
              const to = `/${text}`;
              if (actualLocation.pathname !== to) {
                histor.push(to);
              }
            }}
            selected={actualLocation.pathname === `/${text}`}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
        </React.Fragment>
      );
    }
  );
  return list;
};
export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router history={history} className={classes.root}>
		<Route
			render={({ location }) => (
				<React.Fragment>
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
							<img className={classes.logo}src={Logo} alt='logo meubrecho' />
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
						{listMenu(location, history)}
					</Drawer>
					<main className={classes.content}>
						<Route exact path="/venda" component={() => <Venda />} />
						<Route exact path="/favoritos" component={() => <Favoritos />} />
						<Route exact path="/loja" component={() => <Loja />} />
					</main>
				</React.Fragment>
			)}
		/>
    </Router>
  );
}
