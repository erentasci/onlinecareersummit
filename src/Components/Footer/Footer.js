import React        from 'react';
import logo         from '../../Media/3ikFooterLogo.webp'; 
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <p>COPYRIGHT © 2022. Online Career Summit - Tüm hakları sakldıır.</p>
            <a href = "https://www.3ik.org">
                <img src =  {logo} alt = "3İK" />
            </a>
        </footer>
    )
}

export default Footer;



                


