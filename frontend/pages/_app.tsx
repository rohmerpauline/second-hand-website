import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import NavBarContextProvider from '../Context/NavBar/NavBarContext';
import AuthContextProvider from '../Context/Auth/AuthContext';

function MyApp({ Component, pageProps, router }: AppProps) {
   return (
      <AuthContextProvider>
         <NavBarContextProvider>
            <ProtectedRoute router={router}>
               <Layout>
                  <Component {...pageProps} />
               </Layout>
            </ProtectedRoute>
         </NavBarContextProvider>
      </AuthContextProvider>
   );
}
export default MyApp;
