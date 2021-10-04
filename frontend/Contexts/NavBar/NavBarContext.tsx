import { createContext, useState } from 'react';
import ComponentProps from './props';

export const NavBarContext = createContext([]);

const NavBarContextProvider = ({ children }: ComponentProps) => {
   const [navBar, setNavbar] = useState(false);

   return <NavBarContext.Provider value={[navBar, setNavbar]}>{children}</NavBarContext.Provider>;
};

export default NavBarContextProvider;
