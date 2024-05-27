import Header from "../header/Header";
import Cart from "../cart/Cart";

const CartPage = () => {
    return(
        <>
            <Header/>
            <div className="shell">
                <Cart/>
            </div>
        </>
    )
}

export default CartPage;