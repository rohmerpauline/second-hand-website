import Header from '../Header/Header'
import ComponentProps from './props'

const Layout = ({ children }: ComponentProps ) => {
    return (
        <>
        <Header />
        <main>
            { children } 
        </main>
        </>
    )
}

export default Layout
