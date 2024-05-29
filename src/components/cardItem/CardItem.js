import './cardItem.scss'
import example from '../../resources/example.jpg'
import { BsCartPlus } from "react-icons/bs";
import { IconContext } from 'react-icons';
import { useState } from 'react';

import { useAddToCartMutation } from '../../api/apiSlice';
import { Link } from 'react-router-dom';

const CardItem = ({id, price, type, name, desc, audi, imgs = {}}) => {
    const [goodItemName, setGoodItemName] = useState(name);
    const [goodItemPrice, setGoodItemPrice] = useState(price);
    const [goodItemType, setGoodItemType] = useState(type);
    const [goodItemId, setGoodItemId] = useState(id);
    const [goodItemDesc, setGoodItemDesc] = useState(desc);
    const [goodItemAudi, setGoodItemAudi] = useState(audi);
    const [goodItemImgs, setGoodItemImgs] = useState(imgs)
    const [addToCart] = useAddToCartMutation();

    const onAddToCart = (e) => {
        e.preventDefault();
        const newGood = {
            id: goodItemId,
            price: goodItemPrice,
            type: goodItemType,
            name: goodItemName,
            desc: goodItemDesc,
            audi: goodItemAudi,
            imgs: goodItemImgs
        }

        addToCart(newGood);
    }
    return(
        <Link to={`/${id}`}>
            <div className="card-item">
                <img className="card-item-img"src={imgs.first} alt="" />
                <div className="card-item-info">
                    <div className='card-item-info-text'>
                        <h1 className="card-item-info-text-name">{name}</h1>
                        <h2 className="card-item-info-text-price">{price}$</h2>
                    </div>
                    <IconContext.Provider value={{className: "card-item-info-cart"}}>
                        <button className='card-item-add-to-cart' onClick={(e) => onAddToCart(e)}><BsCartPlus size={30}/></button>
                    </IconContext.Provider>
                </div>
            </div>
        </Link>
    )
}

export default CardItem;