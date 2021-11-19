import { useContext, useEffect } from 'react';
import router from 'next/router';
import Link from 'next/link';
import { NavBarContext } from '../../../Contexts/NavBar/NavBarContext';
import Image from 'next/image';
import NavBar from '../Navbar/NavBar';
import { FiMenu } from 'react-icons/fi';
import headerStyle from '../../../styles/Header.module.css';
import bricomanquant_logo from '../../../public/images/bricomanquant_logo.png';

const Header = () => {
   const [navbar, setNavbar] = useContext(NavBarContext);
   const toggleNavbar = () => setNavbar(!navbar);

   //to close navbar when changing route (previous browser button)
   useEffect(() => {
      const handleRouteChange = () => {
         if (navbar === true) return;
         setNavbar(false);
      };
      router.events.on('routeChangeStart', handleRouteChange);
   }, [navbar]);

   return (
      <>
         <header className={headerStyle.container}>
            <div className={headerStyle.burgermenu}>
               <FiMenu className={headerStyle.burgericone} onClick={toggleNavbar} />
            </div>
            <div className={headerStyle.logocontainer}>
               <Link href='/recherche'>
                  <div className={headerStyle.logo}>
                     <Image src={bricomanquant_logo} alt='logo' layout='intrinsic' />
                  </div>
               </Link>
            </div>
         </header>

         <NavBar navbar={navbar} toggleNavbar={toggleNavbar} />
      </>
   );
};

export default Header;
