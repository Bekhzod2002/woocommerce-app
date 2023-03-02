import React from "react";
import Header from "./header/header";
import './index.scss'
import Footer from "./Footer/Footer";

import Main from './main/main';

const HomePage = () => {
    return(
        <div className="background">
            <div>
                <Header/>   
                <Main/>
                <Footer/>
                
            </div>
 
        </div>
    )
}

export default HomePage;