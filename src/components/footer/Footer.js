import { IconContext } from "react-icons";
import { FaFacebookF, FaInstagram, FaTiktok,FaPinterestP, FaYoutube } from "react-icons/fa";
import './footer.scss'
const Footer = () => {
    return(
        <IconContext.Provider value={{className: "footer-feedback-icon", size: 25}}>
            <footer className="footer">
                <a href="#"><h1 className="footer-name">Clothing-shop</h1></a>
                <div className="footer-feedback">
                    <h1 className="footer-feedback-title">To learn more:</h1>
                    <ul className="footer-feedback-list">
                        <li className="footer-feedback-list-item">
                            <FaFacebookF />
                        </li>
                        <li className="footer-feedback-list-item">
                            <FaInstagram />
                        </li>
                        <li className="footer-feedback-list-item">
                            <FaTiktok />
                        </li>
                        <li className="footer-feedback-list-item">
                            <FaPinterestP />
                        </li>
                        <li className="footer-feedback-list-item">
                            <FaYoutube />
                        </li>
                    </ul>
                </div>
            </footer>
        </IconContext.Provider>
    )
}

export default Footer;