import { Link } from "react-router-dom";
import SignUp from "../SignUp/SignUp";

const LoginPage = () => {
    return(
        <>
            <SignUp/>
            <p> Alrea have an account <Link to="/login">login</Link></p>
        </>
    )
}

export default LoginPage;