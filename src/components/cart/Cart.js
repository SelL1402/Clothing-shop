import "./cart.scss"
import { useGetCartQuery, useDeleteItemMutation } from "../../api/apiSlice";
import { useCallback, useState, useMemo, useEffect } from "react";
import CartItem from "../cartItem/CartItem";
const Cart = () => {

    const {
        data: cartData = [],
    } = useGetCartQuery();

    const [deleteItem] = useDeleteItemMutation();
    const [cart, setCart] = useState(cartData);

    useEffect(() => {
        setCart(cartData);
    }, [cartData]);

    const onDelete = useCallback((id)=>{
        deleteItem(id).then(() => {
            // Обновляем локальное состояние после удаления элемента
            setCart(prevCart => prevCart.filter(item => item.id !== id));
        });
    }, [deleteItem])

    const renderCartList = (arr) => {
        return arr.map(({id, ...props}) => {
            return(
                <CartItem key={id} {...props} onDelete={() => onDelete(id)}/>
            )
        })
    }

    const elements = useMemo(() => renderCartList(cart.slice()), [cart, onDelete]);
    return(
        <div className="cart-page">
            <h1 className="cart-page-content-title">Cart</h1>
            <div className="cart-page-content">
                <ul className="cart-page-content-list">
                    {elements}
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