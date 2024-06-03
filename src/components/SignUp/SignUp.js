import FormAuth from '../form/form';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/Slices/UserSlice';
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate()
    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.id,
                    token: user.accessToken
                }));
                navigate("/personalAccount")
            })
            .catch(console.error)
    }
    return(
        <FormAuth
            title="register"
            handleClick={handleRegister}
            />
    )
}

export default SignUp;