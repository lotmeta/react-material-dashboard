import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination
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

const SolicitacoesTable = props => {
  const { className, users, ...rest } = props;

  const classes = useStyles();

  const [selectedUsers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);



  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
  };

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

                  <TableCell>Nome</TableCell>
                  <TableCell>CNPJ</TableCell>
                  <TableCell>Vcto Certificado</TableCell>
                  <TableCell>Arquivos</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.slice(0, rowsPerPage).map(user => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={user.id}
                    selected={selectedUsers.indexOf(user.id) !== -1}
                  >

                    <TableCell>
                      <div className={classes.nameContainer}>
                        <Typography variant="body1">{user.name}</Typography>
                      </div>
                    </TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>
                      {moment(user.createdAt).format('DD/MM/YYYY')}
                    </TableCell>
                    <TableCell>{moment(user.createdAt).format('DD/MM/YYYY')}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={users.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions>
    </Card>
  );
};

SolicitacoesTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default SolicitacoesTable;
