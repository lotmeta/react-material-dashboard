import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { EstabelecimentoToolbar, EstabelecimentoTable } from './components';
import axios from 'axios';
import { withRouter } from 'react-router';

import PropTypes from 'prop-types';


import { AppContext } from 'contexts/Store';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const API_URL = 'http://localhost:3000/estabelecimentos';
const headers = {};



const EstabelecimentoList = (props) => {
  const { history } = props;
  const classes = useStyles();

  //const contexto = useContext(DataContext);
  const { setDadosEmpresa } = useContext(AppContext);

  /*
  const empresa = {
    nome: string,
    cnpj: string,
    vctoCertificado: string,
  }
  */

  const [empresas, setEmpresas] = useState([]);
  //const [empresas] = useState(mockData);

  const [empresasFiltradas, setEmpresasFiltradas] = useState(empresas);

  const [filtro, setFiltro] = useState('');

  const filtrar = (expressao) => {
    setFiltro(expressao);
  }

  const cpfContadorLogado = 12173762285;

  useEffect(() => {
    setEmpresasFiltradas(empresas);
    if (filtro.length > 0) {
      console.log(`filtrando lista ${filtro}`);
      const listaFiltrada = empresas.filter(e => e.nome.toUpperCase().indexOf(filtro.toUpperCase()) > -1 ||
        e.cnpj.toString().indexOf(filtro) > -1);
      setEmpresasFiltradas(listaFiltrada)
    }

  }, [filtro, empresas]);

  useEffect(() => {
    listarEmpresas(cpfContadorLogado);
    //contexto.setState({ nomeRazao: 'PORTAL DO CONTADOR', cnpj: null })        
  }, []);

  const listarEmpresas = (cpfContador) => {
    axios.get(`${API_URL}?cpfContador=${cpfContador}`, {
      headers: headers
    }).then(response => {
      const listaEmpresas = response.data;
      setEmpresas(listaEmpresas);
      setEmpresasFiltradas(listaEmpresas);
      setDadosEmpresa(null, null);
      //console.log(listaEmpresas);

    }).catch(erro => {
      console.error(`erro ao listar empresas: ${erro}`);
    })
  }

  const exibirSolicitacoes = (cnpjEmpresa, nomeEmpresa) => {
    history.push(`/solicitacoes/${cnpjEmpresa}`);
    //contexto.setState({ nomeRazao: nomeEmpresa, cnpj: cnpjEmpresa })        
    setDadosEmpresa(nomeEmpresa, cnpjEmpresa);
  }

  return (
    <div className={classes.root}>
      <EstabelecimentoToolbar executaFiltro={filtrar} />
      <div className={classes.content}>
        <EstabelecimentoTable
          empresas={empresasFiltradas}
          listarSolicitacoes={exibirSolicitacoes}
        />
      </div>
    </div>
  );
};

EstabelecimentoList.propTypes = {
  history: PropTypes.object
};

export default withRouter(EstabelecimentoList);
