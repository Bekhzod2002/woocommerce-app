import React from "react";
import './people.scss';
import carouselellips1 from '../../../images/carouselellips1.png';
import group13 from '../../../images/Group 13.png';
import peoples from '../../../images/peoples.png';
import radius from '../../../images/radius.png';

const Peoplesection = () => {
    return (
        <>
            <div className="people-section" >

                <img className="group13" src={group13}/>
                <img className="ellipspeople" src={carouselellips1}/>

                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>

                <div>
                    <h5 className="realpeople">Supported by real people</h5>
                    <p className="peopletxt">
                    Our team of Happiness Engineers works 
                    remotely from 58 countries providing 
                    customer support across multiple time zones.
                    </p>
                    <div>
                        <img className="radius" src={radius}/>
                        <img className="peopleimg" src={peoples}/>
                    </div>

                </div>

            </div>
            <div className="darkblue">
                <p className="startbusiness">WooCommerce - the most customizable eCommerce <br/> platform for building your online business.</p>
                <button className="businessbtn">GET STARTED</button>
            </div> 
        </>

    )
}

export default Peoplesection;