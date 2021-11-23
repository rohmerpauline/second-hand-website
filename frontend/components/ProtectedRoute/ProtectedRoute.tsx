import { useContext } from 'react';
import { appRoutes } from '../../constants';
import { AuthContext } from '../../Context/Auth/AuthContext';
import ProtectedRouteProps from './props';

const isBrowser = () => typeof window !== 'undefined';

const ProtectedRoute = ({ children, router }: ProtectedRouteProps) => {
   const [isAuth] = useContext(AuthContext);

   const isAuthenticated = isAuth.isAuthenticated;

   let unprotectedRoutes = [appRoutes.HOME, appRoutes.LOGIN, appRoutes.REGISTER, appRoutes.RESEARCH];
   let routesNotNeededWhenLogIn = [appRoutes.LOGIN, appRoutes.REGISTER];

   let pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1;
   let redirectWhenAuth = routesNotNeededWhenLogIn.indexOf(router.pathname) === 0;

   if (isBrowser() && !isAuthenticated && pathIsProtected) {
      router.push(appRoutes.LOGIN);
   } else if (isBrowser() && isAuthenticated && redirectWhenAuth) {
      router.push(appRoutes.HOME);
   }

   return <>{children}</>;
};

export default ProtectedRoute;
