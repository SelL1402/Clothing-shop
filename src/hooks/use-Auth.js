import { useSelector } from "react-redux";

export function useAuth() {
    const {email, name, surname, dateBirthday, number, sex, token, id} = useSelector(state => state.user);

    return {
        isAuth: !!email,
        email,
        name, 
        surname,
        dateBirthday,
        number, 
        sex, 
        token, 
        id,
    };
}