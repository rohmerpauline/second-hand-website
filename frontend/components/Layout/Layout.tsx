import Header from '../Header/Header'
import ComponentProps from './props'
import layoutStyle from '../../styles/Layout.module.css'

const Layout = ({ children }: ComponentProps ) => {
    return (
        <>
        <Header/>
        <main>
            <div className={layoutStyle.container}>
                { children }
            </div>
        </main>
        </>
    )
}

export default Layout
