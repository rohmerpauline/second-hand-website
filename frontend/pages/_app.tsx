import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import NavBarContextProvider from '../Context/NavBar/NavBarContext';
import AuthContextProvider from '../Context/Auth/AuthContext';

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <AuthContextProvider>
         <NavBarContextProvider>
            <Layout>
               <Component {...pageProps} />
            </Layout>
         </NavBarContextProvider>
      </AuthContextProvider>
   );
}
export default MyApp;
