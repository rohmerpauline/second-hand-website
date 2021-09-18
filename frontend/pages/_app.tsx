import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'
import NavBarContextProvider from '../Contexts/NavBar/NavBarContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <NavBarContextProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </NavBarContextProvider>
  )
}
export default MyApp
