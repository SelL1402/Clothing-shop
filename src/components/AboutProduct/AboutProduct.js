import Carousel from 'react-bootstrap/Carousel';
import Example from '../../resources/example.jpg';
import Accordion from 'react-bootstrap/Accordion';
import { BsCartPlus } from "react-icons/bs";
import './aboutProduct.scss'
import CardItem from '../cardItem/CardItem';
import { useParams } from 'react-router-dom';
import {useGetCurrentQuery} from "../../api/apiSlice"
import { useAddToCartMutation } from '../../api/apiSlice';
const AboutProduct = () => {
    const {itemId} = useParams();
    const [addToCart] = useAddToCartMutation();
    const {
        data: currentItem = [],
    } = useGetCurrentQuery(itemId);
    const {
        data: items = [],
    } = useGetCurrentQuery();

    const otherItems = (arr) => {
        return arr.map(({id, ...props}) => {
            return(
                <CardItem key={id} {...props}/>
            )
        })
    }

    const elements = otherItems(items);
    const {price, name, desc, compound, imgs = {}, id, type, audi} = currentItem;
    const {first, second, third} = imgs;

    const onAddToCart = (e) => {
        e.preventDefault();
        const newGood = {
            id: id,
            price: price,
            type: type,
            name: name,
            desc: desc,
            audi: audi,
            imgs: imgs
        }

        addToCart(newGood);
    }
    return(
        <div className="about-product">
            <div className="about-product-top">
                <div className="about-product-content">
                    <div className="about-product-content-slider">
                        <Carousel fade>
                            <Carousel.Item>
                                {first && <img className="about-product-content-slider-img" src={first} alt="" />}
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                {second && <img className="about-product-content-slider-img" src={second} alt="" />}
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                {third && <img className="about-product-content-slider-img" src={third} alt="" />}
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="about-product-content-info">
                        <h1 className="about-product-content-info-title">{name}</h1>
                        <p className="about-product-content-info-price">{price}$</p>
                        <div className="about-product-content-info-btns">
                            <button onClick={(e)=>onAddToCart(e)}><BsCartPlus className="add-to-cart" size={30}/></button>
                            <button className='order'>Order</button>
                        </div>
                        <div className="about-product-content-info-compound">
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Description</Accordion.Header>
                                <Accordion.Body>
                                {desc}
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Compound</Accordion.Header>
                                <Accordion.Body>
                                {compound}
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Feedback</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-product-bottom">
                <div className="about-product-bottom-content">
                    <h1 className="about-product-bottom-content-title">Other products</h1>
                    <div className="about-product-other">
                        {elements}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutProduct;