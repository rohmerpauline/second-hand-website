import headerStyle from '../styles/Header.module.css'
import { FiMenu } from 'react-icons/fi'
import { FaThumbsUp } from 'react-icons/fa'
//import { AiOutlineClose } from 'react-icons/ai'

const Header = () => {
    return (
        <header className={headerStyle.header}>
            <div className={headerStyle.header_burgermenu}>
                <FiMenu />
                {/* <FaThumbsUp /> */}
            </div>
        </header>
    )
}

export default Header
