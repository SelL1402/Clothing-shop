import Header from "../header/Header";
import PersonalAccount from "../PersonalAccount/PersonalAccount";
const PersonalAccountPage = () => {
    return(
        <>
            <Header/>
            <div className="shell">
                <PersonalAccount/>
            </div>
        </>
    )
}

export default PersonalAccountPage;