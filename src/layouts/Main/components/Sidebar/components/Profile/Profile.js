import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  }
}));

const Profile = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const user = {
    usuario: localStorage.getItem('@portalContador:usuario'),
    avatar: '/images/avatars/avatar_11.png',
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      {/*console.log('mostrou' + user.usuario)*/}
      <Typography
        className={classes.name}
        variant="h4"
      >
        {JSON.parse(user.usuario).nome}
      </Typography>
      <Typography variant="body2">{JSON.parse(user.usuario).cpf}</Typography>
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
