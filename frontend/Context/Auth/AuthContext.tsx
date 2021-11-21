import { createContext, useState, useEffect } from 'react';
import AuthContextProps from './props';

export const AuthContext = createContext([]);

const AuthContextProvider = ({ children }: AuthContextProps) => {
   /*    const [isAuth, setIsAuth] = useState(false);
   const [token, setIsToken] = useState('lol'); */

   const [isAuth, setIsAuth] = useState({
      isAuthenticated: false,
      token: null,
   });

   useEffect(() => {
      if (isAuth.token !== null) {
         localStorage.setItem('token', isAuth.token);
      }
   }, [isAuth.token]);

   useEffect(() => {
      const existingToken = localStorage.getItem('token');
      console.log(existingToken);
      if (existingToken) {
         setIsAuth({
            isAuthenticated: true,
            token: existingToken,
         });
         console.log('coucou du local storage');
      } else if (existingToken === null) {
         setIsAuth({
            isAuthenticated: false,
            token: null,
         });
      }
   }, []);

   return <AuthContext.Provider value={[isAuth, setIsAuth]}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
