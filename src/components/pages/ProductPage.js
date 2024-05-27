import Header from "../header/Header";
import Footer from "../footer/Footer";
import AboutProduct from "../AboutProduct/AboutProduct";
const ProductPage = () => {
    return(
        <>
            <Header/>
                <div className="shell">
                    <AboutProduct/>
                </div>
            <Footer/>
        </>
    )
}

export default ProductPage;