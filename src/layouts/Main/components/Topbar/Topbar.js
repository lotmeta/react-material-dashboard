import React, { useContext, useState } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Typography from '@material-ui/core/Typography';

//import DataContext from '../../../../contexts/dadosEmpresa'
import { AppContext } from '../../../../contexts/Store'



const useStyles = makeStyles(theme => ({
  texto: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    minHeight: 'fit-content',
    marginLeft: theme.spacing(2)
  },
  name: {
    marginTop: theme.spacing(1)
  },
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const { nome, cnpj } = useContext(AppContext);

  const classes = useStyles();

  const [notifications] = useState([]);

  // const dadosEmpresa = {
  //  name: contexto.state.nomeRazao,
  // cnpj: contexto.state.cnpj
  //};

  const dadosEmpresa = {
    name: nome,
    cnpj: cnpj
  };

  const handleSignOut = () => {
    localStorage.removeItem('@portalContador:token');
    localStorage.removeItem('@portalContador:usuario');
    localStorage.removeItem('@portalContador:signed');
    props.history.push('/sign-in');
  };


  return (
    <AppBar
      style={{ background: '#1A75BC' }}
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <RouterLink to="/">
          <img
            alt="Logo"
            src="/images/logos/logo-home-menor.png"
          />
        </RouterLink>
        <div className={clsx(classes.texto, className)}>
          <Typography
            className={classes.name}
            color="inherit"
            variant="h2"
          >{dadosEmpresa.name}</Typography>
          <Typography
            color="inherit"
            variant="body2"
          >{dadosEmpresa.cnpj}</Typography>
        </div>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            className={classes.signOutButton}
            color="inherit"
            onClick={handleSignOut}
          >
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  history: PropTypes.object,
  onSidebarOpen: PropTypes.func
};

export default withRouter(Topbar);
