import React from 'react';
import logoconfira from '../assets/img/logo-site.png';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header>
                <div class="header-container">
                    <Link to="/">
                        <img src={logoconfira} alt="Logo Site" />
                    </Link>
                </div>
            </header>
        </>
    )
}

export default Header