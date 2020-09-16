import React, { useContext } from 'react';
import { AuthContext } from 'utils/contexts';
import { Route, Redirect } from 'react-router-dom';

const AuthenticatedRoute = ({ component: Component, ...rest }: any) => {
  const {
    authState: { auth },
  } = useContext(AuthContext);

  const isAuthenticated = !!auth?.id;

  return (
    <Route
      {...rest}
      component={(props: any) =>
        isAuthenticated ? (
          <div>
            <Component {...props} />
          </div>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default AuthenticatedRoute;
