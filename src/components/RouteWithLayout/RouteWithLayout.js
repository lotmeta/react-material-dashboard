import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext } from 'contexts/auth';

const RouteWithLayout = props => {
  const { layout: Layout, component: Component, isPrivate: IsPrivate, signed: Signed, ...rest } = props;
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (<h1>Carregando</h1>);
  }

  console.log({ ...rest });
  console.log(Component);


  if (IsPrivate && !Signed) {
    return (<Redirect to="/sign-in" />);
  }

  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  isPrivate: PropTypes.bool,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string,
  signed: PropTypes.bool
};

export default RouteWithLayout;
