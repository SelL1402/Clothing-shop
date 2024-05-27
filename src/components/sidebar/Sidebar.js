import './Sidebar.scss'
const Sidebar = () => {
    return(
        <aside>
            <nav className='asidebar-nav'>
                <ul className="asidebar-nav-list">
                    <li className="asidebar-nav-list-item">
                        <a href="#" className='asidebar-nav-list-item-link'>Accessories</a>
                    </li>
                    <li className="asidebar-nav-list-item">
                        <a href="#" className='asidebar-nav-list-item-link'>Сlothes</a>
                    </li>
                    <li className="asidebar-nav-list-item">
                        <a href="#" className='asidebar-nav-list-item-link'>Shoes</a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar;