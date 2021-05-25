import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

import Search from '../Search';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));


const EstabelecimentoToolbar = props => {
  const { className, executaFiltro, ...rest } = props;

  const [expressaoBusca, setExpressaoBusca] = useState('');

  const classes = useStyles();

  const handleSearchChange = (expressao) => {
    setExpressaoBusca(expressao);
  }

  useEffect(() => {
    executaFiltro(expressaoBusca);
  }, [expressaoBusca, executaFiltro])

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >

      <div className={classes.row}>
        {/* <SearchInput
          className={classes.searchInput}
          placeholder="Localizar empresas"
        /> */}
        <Search
          disabled={false}
          onChange={handleSearchChange}
        />


      </div>
    </div>
  );
};

EstabelecimentoToolbar.propTypes = {
  className: PropTypes.string,
  executaFiltro: PropTypes.string
};

export default EstabelecimentoToolbar;
