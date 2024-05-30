import { NavLink } from 'react-router-dom';
import './header.scss';
import { FaBasketShopping, FaRegUser }  from "react-icons/fa6";
const Header = () => {
    return(
        <header className='header'>
            <NavLink end to="/"><h1 className="header-name">Clothing-shop</h1></NavLink>
            <nav className='header-nav'>
                <ul className='header-nav-list'>
                    <li className='header-nav-list-item'>
                        <NavLink end to="/productsPage/Men"><h1 className='header-nav-list-item-link'>Men</h1></NavLink>
                    </li>
                    <li className='header-nav-list-item'>
                        <NavLink end to="/productsPage/Women"><h1 className='header-nav-list-item-link'>Women</h1></NavLink>
                    </li>
                    <li className='header-nav-list-item'>
                        <NavLink end to="/productsPage/Kids"><h1 className='header-nav-list-item-link'>Kids</h1></NavLink>
                    </li>
                </ul>
                <div className="header-nav-icon">
                    <NavLink end to="/cart"><FaBasketShopping size={30}/></NavLink>
                </div>
                <div className="header-nav-icon">
                    <NavLink end to="/personalAccount"><FaRegUser size={30}/></NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header;