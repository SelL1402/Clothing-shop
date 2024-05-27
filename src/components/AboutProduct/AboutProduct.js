import Carousel from 'react-bootstrap/Carousel';
import Example from '../../resources/example.jpg';
import Accordion from 'react-bootstrap/Accordion';
import { BsCartPlus } from "react-icons/bs";
import './aboutProduct.scss'
import CardItem from '../cardItem/CardItem';

const AboutProduct = () => {
    return(
        <div className="about-product">
            <div className="about-product-top">
                <div className="about-product-content">
                    <div className="about-product-content-slider">
                        <Carousel fade>
                            <Carousel.Item>
                                <img className="about-product-content-slider-img"src={Example} alt="" />
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="about-product-content-slider-img"src={Example} alt="" />
                                <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="about-product-content-slider-img"src={Example} alt="" />
                                <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="about-product-content-info">
                        <h1 className="about-product-content-info-title">Pants</h1>
                        <p className="about-product-content-info-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, aspernatur odit. Sapiente similique vel fugiat, nobis iure rem aspernatur officiis nesciunt, eius fugit dolorum.</p>
                        <div className="about-product-content-info-btns">
                            <BsCartPlus className="add-to-cart" size={30}/>
                            <button className='order'>Order</button>
                        </div>
                        <div className="about-product-content-info-compound">
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Description</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Compound</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
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
                        <CardItem/>
                        <CardItem/>
                        <CardItem/>
                        <CardItem/>
                        <CardItem/>
                        <CardItem/>
                        <CardItem/>
                        <CardItem/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutProduct;