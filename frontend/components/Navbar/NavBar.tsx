import Link from 'next/link';
import NavBarItems from '../../Configs/NavBarItems';
import { AiOutlineClose } from 'react-icons/ai';
import navStyle from '../../styles/NavBar.module.css';
import NavProps from './props';

const NavBar = ({ navbar, toggleNavbar }: NavProps) => {
   return (
      <nav className={navbar ? navStyle.container : navStyle.navhidden} onClick={navbar === true ? toggleNavbar : null}>
         <div className={navStyle.content}>
            <div className={navStyle.iconecontainer}>
               <AiOutlineClose className={navStyle.icone} onClick={toggleNavbar} />
            </div>
            <ul className={navStyle.menu} onClick={toggleNavbar}>
               {NavBarItems.map((item) => (
                  <Link href={item.path} key={item.name}>
                     <li>{item.name}</li>
                  </Link>
               ))}
            </ul>
         </div>
      </nav>
   );
};

export default NavBar;
