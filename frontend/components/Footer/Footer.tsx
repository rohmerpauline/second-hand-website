import footerStyle from '../../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={footerStyle.container}>
            <p className={footerStyle.logo}>Bricomanquant</p>
            <div className={footerStyle.links}>
                <p className={footerStyle.link}>Accueil</p>
                <p className={footerStyle.selector}>|</p>
                <p className={footerStyle.link}>Qui sommes nous ?</p>
                <p className={footerStyle.selector}>|</p>
                <p className={footerStyle.link}>Cookies</p>
                <p className={footerStyle.selector}>|</p>
                <p className={footerStyle.link}>CGU</p>
            </div>
        </footer>
    )
}

export default Footer
