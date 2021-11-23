import { createContext, useState, useEffect } from 'react';
import AuthContextProps from './props';

export const AuthContext = createContext([]);

const AuthContextProvider = ({ children }: AuthContextProps) => {
   const [isAuth, setIsAuth] = useState({
      isAuthenticated: false,
      token: null,
      id: null,
   });

   useEffect(() => {
      if (isAuth.token !== null) {
         localStorage.setItem('token', isAuth.token);
         localStorage.setItem('userId', isAuth.id);
      }
   }, [isAuth.token]);

   useEffect(() => {
      const existingToken = localStorage.getItem('token');
      const existingUserId = localStorage.getItem('userId');
      if (existingToken) {
         setIsAuth({
            isAuthenticated: true,
            token: existingToken,
            id: existingUserId,
         });
         console.log('coucou du local storage');
      } else if (existingToken === null) {
         setIsAuth({
            isAuthenticated: false,
            token: null,
            id: null,
         });
      }
   }, []);

   return <AuthContext.Provider value={[isAuth, setIsAuth]}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
