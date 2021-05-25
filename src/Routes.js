import { AuthContext } from 'contexts/auth';
import React, { useContext } from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  ProductList as ProductListView,
  EstabelecimentoList as EstabelecimentoListView,
  SolicitacoesList as SolicitacoesListView,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView
} from './views';


const Routes = () => {

  const { signed } = useContext(AuthContext);

  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/empresas"
      />
      {/*       
      <RouteWithLayout
        component={DashboardView}
        exact
        isPrivate
        layout={MainLayout}
        path="/dashboard"
        signed={signed}
      /> */}
      <RouteWithLayout
        component={EstabelecimentoListView}
        exact
        isPrivate
        layout={MainLayout}
        path="/empresas"
        signed={signed}
      />
      <RouteWithLayout
        component={SolicitacoesListView}
        isPrivate
        layout={MainLayout}
        path="/solicitacoes/:cnpjEmpresa"
        signed={signed}
      />
      <RouteWithLayout
        component={ProductListView}
        exact
        layout={MainLayout}
        path="/products"
      />
      <RouteWithLayout
        component={TypographyView}
        exact
        layout={MainLayout}
        path="/typography"
      />
      <RouteWithLayout
        component={IconsView}
        exact
        layout={MainLayout}
        path="/icons"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
