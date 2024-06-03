import { Link } from "react-router-dom";
import Login from "../Login/Login";
import Header from "../header/Header";
const LoginPage = () => {
    return(
        <>
            <Header/>
            <div className="main">
                <h1>Please Sing in</h1>
                <Login/>
                <p className="text"> or you can <Link to="/register">register</Link></p>
            </div> 
        </>
    )
}

export default LoginPage;