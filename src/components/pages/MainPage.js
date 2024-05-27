import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Main from "../main/Main";
import Footer from "../footer/Footer";
const MainPage = ()=> {
    return(
        <>
            <Header/>
            <div className="shell">
                <Sidebar/>
                <Main/>
            </div>
            <Footer/>
        </>
    )
}

export default MainPage;