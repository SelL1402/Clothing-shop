import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";
import Main from "../main/Main";
const ProductsPage = ({type}) =>{
    
    

    return(
        <>
            <Header/>
            <div className="shell">
                <Sidebar/>
                <Main type={type}/>
            </div>
            <Footer/>
        </>
    )
}

export default ProductsPage;