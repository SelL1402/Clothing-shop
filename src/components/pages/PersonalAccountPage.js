import Header from "../header/Header";
import PersonalAccount from "../PersonalAccount/PersonalAccount";
import Footer from "../footer/Footer";
const PersonalAccountPage = () => {
    return(
        <>
            <Header/>
            <div className="shell">
                <PersonalAccount/>
            </div>
            <Footer/>
        </>
    )
}

export default PersonalAccountPage;