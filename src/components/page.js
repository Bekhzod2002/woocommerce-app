import React from "react";
import Header from "./header/header";
import './index.scss'

import Main from './main/main';

const HomePage = () => {
    return(
        <div className="background">
            <div>
                <Header/>   
                <Main/>
                
            </div>
 
        </div>
    )
}

export default HomePage;