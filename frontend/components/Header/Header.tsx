import { useContext } from 'react'
import headerStyle from '../../styles/Header.module.css'
import { FiMenu } from 'react-icons/fi'
import Link from 'next/link'
import Image from 'next/image'
import NavBar from '../Navbar/NavBar'
import bricomanquant_logo from '../../public/images/bricomanquant_logo.png'
import { NavBarContext } from "../../Contexts/NavBar/NavBarContext"

//import { AiOutlineClose } from 'react-icons/ai'

const Header = () => {

    const [navbar, setNavbar] = useContext(NavBarContext)
    const toggleNavbar = () => setNavbar(!navbar)


    return (
        <>
        <header className={headerStyle.container}>
            <div className={headerStyle.burgermenu}>
                <FiMenu className={headerStyle.burgericone} onClick={toggleNavbar}/>
            </div>
            <div className={headerStyle.logocontainer}>
                <Link href='/recherche'>
                    <div className={headerStyle.logo}>
                        <Image src={bricomanquant_logo} alt="logo" layout="intrinsic" />
                    </div>
                </Link>
            </div>
        </header>

        <NavBar 
            navbar={navbar}
            setNavbar={setNavbar}
        />

        </>
    )
}

export default Header
