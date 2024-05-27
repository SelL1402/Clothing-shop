import "./cart.scss"
import example from '../../resources/example.jpg'
import { BsTrash } from "react-icons/bs";




const Cart = () => {
    return(
        <div className="cart-page">
            <h1 className="cart-page-content-title">Cart</h1>
            <div className="cart-page-content">
                <ul className="cart-page-content-list">
                    <li className="cart-page-content-list-item">
                        <div className="cart-page-content-list-left">
                            <img className="cart-page-content-list-left-img" src={example}alt="" />
                            <div className="cart-page-content-list-left-text">
                                <h2 className="cart-page-content-list-left-text-title">Pants</h2>
                                <h5 className="cart-page-content-list-left-text-desc">Color: Blue</h5>
                                <h5 className="cart-page-content-list-left-text-desc">Size: xl</h5>  
                                <select className="selection" name="choices" id="">
                                    <option value="1" selected>1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                </select>
                            </div>
                        </div>
                        <div className="cart-page-content-list-right">
                            <button className="cart-page-content-list-right-btn">
                                <BsTrash size={25}/>
                            </button>
                            <p className="cart-page-content-list-right-price">50$</p>
                        </div>
                    </li>
                    <li className="cart-page-content-list-item">
                        <div className="cart-page-content-list-left">
                            <img className="cart-page-content-list-left-img" src={example}alt="" />
                            <div className="cart-page-content-list-left-text">
                                <h2 className="cart-page-content-list-left-text-title">Pants</h2>
                                <h5 className="cart-page-content-list-left-text-desc">Color: Blue</h5>
                                <h5 className="cart-page-content-list-left-text-desc">Size: xl</h5>  
                                <select className="selection" name="choices" id="">
                                    <option value="1" selected>1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                </select>
                            </div>
                        </div>
                        <div className="cart-page-content-list-right">
                            <button className="cart-page-content-list-right-btn">
                                <BsTrash size={25}/>
                            </button>
                            <p className="cart-page-content-list-right-price">50$</p>
                        </div>
                    </li>
                    <li className="cart-page-content-list-item">
                        <div className="cart-page-content-list-left">
                            <img className="cart-page-content-list-left-img" src={example}alt="" />
                            <div className="cart-page-content-list-left-text">
                                <h2 className="cart-page-content-list-left-text-title">Pants</h2>
                                <h5 className="cart-page-content-list-left-text-desc">Color: Blue</h5>
                                <h5 className="cart-page-content-list-left-text-desc">Size: xl</h5>  
                                <select className="selection" name="choices" id="">
                                    <option value="1" selected>1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                </select>
                            </div>
                        </div>
                        <div className="cart-page-content-list-right">
                            <button className="cart-page-content-list-right-btn">
                                <BsTrash size={25}/>
                            </button>
                            <p className="cart-page-content-list-right-price">50$</p>
                        </div>
                    </li>
                    <li className="cart-page-content-list-item">
                        <div className="cart-page-content-list-left">
                            <img className="cart-page-content-list-left-img" src={example}alt="" />
                            <div className="cart-page-content-list-left-text">
                                <h2 className="cart-page-content-list-left-text-title">Pants</h2>
                                <h5 className="cart-page-content-list-left-text-desc">Color: Blue</h5>
                                <h5 className="cart-page-content-list-left-text-desc">Size: xl</h5>  
                                <select className="selection" name="choices" id="">
                                    <option value="1" selected>1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                </select>
                            </div>
                        </div>
                        <div className="cart-page-content-list-right">
                            <button className="cart-page-content-list-right-btn">
                                <BsTrash size={25}/>
                            </button>
                            <p className="cart-page-content-list-right-price">50$</p>
                        </div>
                    </li>
                </ul>
                <div className="cart-page-content-form">
                    <div className="cart-page-content-form-price-goods">Price of goofs 50$</div>
                    <div className="cart-page-content-form-price-delivery">Delivery 50$</div>
                    <button className="cart-page-content-form-price-order">Placing an order </button>
                </div>
            </div>
        </div>
    )
}

export default Cart;