import FormAuth from '../form/form';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/Slices/UserSlice';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email:user.email,
                    id: user.id,
                    token: user.accessToken
                }));
                navigate("/personalAccount")
            })
            .catch(console.error)
    }
    return(
       <FormAuth
            title="sign in"
            handleClick={handleLogin}
        />
    )
}

export default Login;