import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ handlerDark, darkMode, darkText }) => {
    const [navPalets, setNavPalets] = useState('#3B82F6');


    const changeNavCyan = () => setNavPalets('#3B82F6')

    const changeNavRed = () => setNavPalets('#EF4444')

    const changeNavOrange = () => setNavPalets('#F59E0B')

    const changeNavViolet = () => setNavPalets('#6366F1')

    const changeNavGreen = () => setNavPalets('#10B981')

    return (
        <nav style={{ backgroundColor: navPalets }} >
            <h2>Text Utilities</h2>
            <div className="palets">
                <div onClick={changeNavCyan} className="cyan colors"></div>
                <div onClick={changeNavRed} className="red colors"></div>
                <div onClick={changeNavOrange} className="orange colors"></div>
                <div onClick={changeNavViolet} className="violet colors"></div>
                <div onClick={changeNavGreen} className="green colors"></div>
            </div>
            <button onClick={handlerDark} className="darkModeBtn" style={{ backgroundColor: darkMode, color: darkText }} >
                <i className="fa-solid fa-moon"></i>
            </button>
        </nav>    
    )
}

export default Navbar;