import { Navigate, useLocation } from 'react-router-dom';
import AuthenticationService from './services/authentication-service';
import { type ReactNode } from 'react';

interface PrivateRouteProps {
  path?: string;
  element?: ReactNode;
  children?: ReactNode;
}

const PrivateRoute = ({ element, children, path }: PrivateRouteProps) => {
  const location = useLocation();
  const isAuthenticated = AuthenticationService.isAuthenticated;

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Log optionnelle pour debug
  if (path) {
    console.log(`Accès autorisé à la route: ${path}`);
  }

  return <>{element || children}</>;
};

export default PrivateRoute;