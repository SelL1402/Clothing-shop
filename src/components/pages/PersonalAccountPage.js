import React, { useEffect } from 'react';
import Header from "../header/Header";
import PersonalAccount from "../PersonalAccount/PersonalAccount";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-Auth";
import { useDispatch } from "react-redux";

const PersonalAccountPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuth, email } = useAuth();

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, [isAuth, navigate]);

    if (isAuth) {
        return ( 
            <>
                <Header/>
                <div className="shell">
                    <PersonalAccount/>
                </div>
                <Footer/>
            </>
        );
    }

    return null; // or a loading spinner, or some other fallback UI
}

export default PersonalAccountPage;
