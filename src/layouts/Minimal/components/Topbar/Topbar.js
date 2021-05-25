import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import theme from 'theme';

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: 'none'
  },
  tituloPagina: {
    marginLeft: theme.spacing(3)
  },
}));

const Topbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      position="fixed"
      style={{ background: '#1A75BC' }}
    >
      <Toolbar>
        <RouterLink to="/">
          <img
            alt="Logo"
            src="/images/logos/logo-home-menor.png"
          />
        </RouterLink>
        <Typography
          className={classes.tituloPagina}
          color="inherit"
          variant="h1"
        >Portal do Contador</Typography>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string
};

export default Topbar;
