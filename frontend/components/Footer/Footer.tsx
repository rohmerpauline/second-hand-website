import footerStyle from '../../styles/Footer.module.css';

const Footer = () => {
   const footerElement = ['Accueil', 'Qui sommes nous ?', 'Cookies', 'CGU'];

   return (
      <footer className={footerStyle.container}>
         <p className={footerStyle.logo}>Bricomanquant</p>
         <div className={footerStyle.links}>
            {footerElement.map((element, index) => {
               return (
                  <div key={index}>
                     <p className={footerStyle.link}>{element}</p>
                     <p className={footerStyle.separator}>|</p>
                  </div>
               );
            })}
         </div>
      </footer>
   );
};

export default Footer;
