import { useContext, useEffect } from 'react';
import router from 'next/router';
import Link from 'next/link';
import { NavBarContext } from '../../../Context/NavBar/NavBarContext';
import Image from 'next/image';
import NavBar from '../Navbar/NavBar';
import { FiMenu } from 'react-icons/fi';
import headerStyle from '../../../styles/Header.module.css';
import bricomanquant_logo from '../../../public/images/bricomanquant_logo.png';

import { AuthContext } from '../../../Context/Auth/AuthContext';

const Header = () => {
   const [navbar, setNavbar] = useContext(NavBarContext);
   const [isAuth, setIsAuth] = useContext(AuthContext);
   const toggleNavbar = () => setNavbar(!navbar);

   //to close navbar when changing route (previous browser button)
   useEffect(() => {
      const handleRouteChange = () => {
         if (navbar === true) return;
         setNavbar(false);
      };
      router.events.on('routeChangeStart', handleRouteChange);
   }, [navbar]);

   const logOut = () => {
      localStorage.clear();
      setIsAuth({
         isAuthenticated: false,
         token: null,
      });
   };

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
            {isAuth.isAuthenticated && (
               <div className={headerStyle.logOutBtnContainer}>
                  <button className={headerStyle.logOutBtn} onClick={() => logOut()}>
                     Se déconnecter
                  </button>
               </div>
            )}
         </header>

         <NavBar navbar={navbar} toggleNavbar={toggleNavbar} />
      </>
   );
};

export default Header;
