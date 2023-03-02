import React from "react";
import LOGO from '../../images/LOGO.png';
import landingvector from '../../images/landingvector.png';

import '../index.scss'


const Header = () => {
    return(

        <>
            <img className="landingvector" src={landingvector}/>

            <div className="headerpart">

                <div className="headmenu">
                    <div className="menu">
                        <div className="logo">
                            <img src={LOGO}/>
                        </div>
                        <div className="links">
                            <a className="linkheader">Sell</a>
                            <a className="linkheader">Marketplace</a>
                            <a className="linkheader">Community</a>
                            <a className="linkheader">Develop</a>
                            <a className="linkheader">Resources</a>
                        </div>
                    </div>
                    <div className="login">
                        <p className="linklogin">Log in</p>
                        <div className="search">
                            <button className="startbtn">Get Started</button>
                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </div>
                    
                    
                        
                    </div>


                </div>
            </div>
        </>

    )
}

export default Header;