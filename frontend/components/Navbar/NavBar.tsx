import React, { useContext } from 'react'
import NavBarItems from "../../Configs/NavBarItems"
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'
import navStyle from '../../styles/NavBar.module.css'
import { NavBarContext } from "../../Contexts/NavBar/NavBarContext"

interface NavProps {
    navbar: boolean,
    toggleNavbar: ()=>boolean,
}

const NavBar = ({navbar, setNavbar}: NavProps) => {

    /* const [navbar, setNavbar] = useContext(NavBarContext) */
    const toggleNavbar = () => setNavbar(!navbar)

    return (
        <nav className={navbar ? navStyle.container : navStyle.navhidden} onClick={navbar === true ? toggleNavbar : null}>
            <div className={navStyle.content}>
                <div className={navStyle.iconecontainer}>
                    <AiOutlineClose className={navStyle.icone} onClick={toggleNavbar}/>
                </div>
                <ul className={navStyle.menu} onClick={toggleNavbar}> 
                { 
                    NavBarItems.map(item=>(
                        <Link href={item.path} key={item.name}><li>{item.name}</li></Link>
                    ))
                }
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
