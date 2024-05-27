import './cardItem.scss'
import example from '../../resources/example.jpg'
import { BsCartPlus } from "react-icons/bs";
import { IconContext } from 'react-icons';
const CardItem = ({name, price}) => {
    return(
        <div className="card-item">
            <img className="card-item-img"src={example} alt="" />
            <div className="card-item-info">
                <div className='card-item-info-text'>
                    <h1 className="card-item-info-text-name">{name}</h1>
                    <h2 className="card-item-info-text-price">100$</h2>
                </div>
                <IconContext.Provider value={{className: "card-item-info-cart"}}>
                    <BsCartPlus size={30}/>
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default CardItem;