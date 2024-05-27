import './header.scss';
import { FaBasketShopping, FaRegUser }  from "react-icons/fa6";
const Header = () => {
    return(
        <header className='header'>
            <a href="#"><h1 className="header-name">Clothing-shop</h1></a>
            <nav className='header-nav'>
                <ul className='header-nav-list'>
                    <li className='header-nav-list-item'>
                        <a className='header-nav-list-item-link'href="#">Men</a>
                    </li>
                    <li className='header-nav-list-item'>
                        <a className='header-nav-list-item-link'href="#">Women</a>
                    </li>
                    <li className='header-nav-list-item'>
                        <a className='header-nav-list-item-link'href="#">Kids</a>
                    </li>
                </ul>
                <div className="header-nav-icon">
                    <a href="#">
                        <FaBasketShopping size={30}/>   
                    </a>
                </div>
                <div className="header-nav-icon">
                    <a href="#">
                        <FaRegUser size={30}/>   
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Header;