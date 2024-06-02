import { useSelector } from "react-redux";

export function UseAuth() {
    const {name, surname, email, token, id} = useSelector(state => state.user);


    return(
        isAuth: !!email,
        email, 
        token,
        id
    )
}