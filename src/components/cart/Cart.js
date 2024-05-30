import "./cart.scss";
import { useGetCartQuery, useDeleteItemMutation } from "../../api/apiSlice";
import { useCallback } from "react";
import CartItem from "../cartItem/CartItem";

const Cart = () => {
  const {
    data: cartData = [],
    refetch
  } = useGetCartQuery();
  
  const [deleteItem] = useDeleteItemMutation();

  const onDelete = useCallback(async (id) => {
    try {
      await deleteItem(id);
      // Refetch data after successful deletion
      refetch();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  }, [deleteItem, refetch]);

  const renderItemList = (arr) => {
    if (arr.length === 0) {
      return (
        <h1 className="cart-page-content-title">Your cart is currently no products...</h1>
      );
    }
    
    return arr.map(({ id, ...props }) => {
      return (
        <CartItem key={id} {...props} onDelete={() => onDelete(id)} />
      );
    });
  }

  const price = (arr) => {
    if(arr.length === 0){
      return (
        '0'
      )
    } else{
      let cost = 0;
      arr.forEach(item => {
        cost += item.price;
      })
      return (
        `${cost}`
      )
    }
  }

  const delivery = (num) => {
    return(
      num*0.1
    )
  }

  const elements = renderItemList(cartData);
  const cost = price(cartData)
  const deliveryPrice = delivery(cost)
  return (
    <div className="cart-page">
      <h1 className="cart-page-content-title">Cart</h1>
      <div className="cart-page-content">
        <ul className="cart-page-content-list">{elements}</ul>
        <div className="cart-page-content-form">
          <div className="cart-page-content-form-price-goods">Price of goods {cost}$</div>
          <div className="cart-page-content-form-price-delivery">Delivery {deliveryPrice}$</div>
          <button className="cart-page-content-form-price-order">Placing an order</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
