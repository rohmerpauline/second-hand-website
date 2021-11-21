import { useContext } from 'react';
import Link from 'next/link';
import { NAVBAR_ITEMS } from '../../../constants';
import { AiOutlineClose } from 'react-icons/ai';
import navStyle from '../../../styles/NavBar.module.css';
import NavProps from './props';
import { AuthContext } from '../../../Context/Auth/AuthContext';

const NavBar = ({ navbar, toggleNavbar }: NavProps) => {
   const [isAuth, setIsAuth] = useContext(AuthContext);

   const logOut = () => {
      localStorage.clear();
      setIsAuth({
         isAuthenticated: false,
         token: null,
      });
   };

   return (
      <nav className={navbar ? navStyle.container : navStyle.navhidden} onClick={navbar === true ? toggleNavbar : null}>
         <div className={navStyle.content}>
            <div className={navStyle.iconecontainer}>
               <AiOutlineClose className={navStyle.icone} onClick={toggleNavbar} />
            </div>
            <ul className={navStyle.menu} onClick={toggleNavbar}>
               {NAVBAR_ITEMS.map((item) => (
                  <Link href={item.path} key={item.name}>
                     <li>{item.name}</li>
                  </Link>
               ))}
               <li onClick={() => logOut()}>Se déconnecter</li>
            </ul>
         </div>
      </nav>
   );
};

export default NavBar;
