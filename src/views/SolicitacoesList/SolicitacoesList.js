import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { SolicitacoesToolbar, SolicitacoesTable } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const SolicitacoesList = () => {
  //const { cnpjEmpresa } = useParams();

  const classes = useStyles();

  const [users] = useState(mockData);

  return (
    <div className={classes.root}>
      <SolicitacoesToolbar />
      <div className={classes.content}>
        <SolicitacoesTable users={users} />
      </div>
    </div>
  );
};

export default SolicitacoesList;
