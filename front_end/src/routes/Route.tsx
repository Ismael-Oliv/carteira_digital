import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOmRouter,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

interface RouteInterface extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

export function Route({
  isPrivate = false,
  component: Component,
  ...rest
}: RouteInterface) {
  const { user } = useAuth();
  return (
    <ReactDOmRouter
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}
