import example from '../../resources/example.jpg'
import { BsTrash } from "react-icons/bs";

const CartItem = ({name, price, onDelete}) => {

    return(
        <li className="cart-page-content-list-item">
            <div className="cart-page-content-list-left">
                <img className="cart-page-content-list-left-img" src={example}alt="" />
                <div className="cart-page-content-list-left-text">
                    <h2 className="cart-page-content-list-left-text-title">{name}</h2>
                    <h5 className="cart-page-content-list-left-text-desc">Color: Blue</h5>
                    <h5 className="cart-page-content-list-left-text-desc">Size: xl</h5>  
                    <select className="selection" name="choices">
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
                <button onClick={onDelete} className="cart-page-content-list-right-btn">
                    <BsTrash size={25}/>
                </button>
                <p className="cart-page-content-list-right-price">{price}</p>
            </div>
        </li>
    )
}

export default CartItem;