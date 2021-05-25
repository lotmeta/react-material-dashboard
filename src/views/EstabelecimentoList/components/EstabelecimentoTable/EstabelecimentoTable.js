import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  IconButton
} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const EstabelecimentoTable = props => {
  const { className, empresas, ...rest } = props;

  const classes = useStyles();

  const [selectedUsers] = useState([]);





  const exibeSolicitacoes = (event, cnpj, nome) => {
    event.preventDefault();
    props.listarSolicitacoes(cnpj, nome);
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>

                  <TableCell>Nome Razão</TableCell>
                  <TableCell>CNPJ</TableCell>
                  <TableCell>Certificado</TableCell>
                  <TableCell>Arquivos</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {empresas.map(user => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={user._id}
                    selected={selectedUsers.indexOf(user._id) !== -1}
                  >

                    <TableCell>
                      <div className={classes.nameContainer}>
                        <Typography variant="body1">{user.nome}</Typography>
                      </div>
                    </TableCell>
                    <TableCell>{user.cnpj}</TableCell>
                    <TableCell>
                      {user.vencimento}
                    </TableCell>
                    <TableCell>
                      <IconButton
                        color="secondary"
                        onClick={e => exibeSolicitacoes(e, user.cnpj, user.nome)}
                      >
                        <DescriptionTwoToneIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      {/*}
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={empresas.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions>
                */}
    </Card>
  );
};

EstabelecimentoTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default EstabelecimentoTable;
