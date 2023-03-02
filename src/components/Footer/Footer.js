import React from "react";
import checkicon from '../../images/checkicon.png';
import unionicon from '../../images/unionicon.png';
import lockicon from '../../images/lockicon.png';
import logofoot from '../../images/logofoot.png';
import automatic from '../../images/automatic.png';

import { FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa";
import { ImConnection} from 'react-icons/im';
import './footer.scss'
const Footer = () => {
    return(
        <>
            <div className="footer">
                <div className="circle4"></div>
                <div className="iconsfoot">
                    <p className="checkicon"><img src={checkicon} /> 30 day money back guarantee</p>
                    <p className="unionicon"><img src={unionicon}/> Support teams across the world</p>
                    <p className="lockicon"><img src={lockicon}/> Safe & Secure online payment</p>
                </div>
                <div>
                    <img className="logofoot" src={logofoot}/>
                </div>
                <div className="chiziq"></div>

                <div className="footinfo">
                    <div className="aboutus">
                        <h5 className="abouthead">WHO WE ARE</h5>
                        <a className="linkfoot">About</a>
                        <a className="linkfoot">Team</a>
                        <a className="linkfoot">Work With Us</a>
                    </div>
                    <div className="footmenu">
                        <h5 className="commerce">WOOCOMMERCE</h5>
                        <a className="linkfoot">Features</a>
                        <a className="linkfoot">Payments</a>
                        <a className="linkfoot">Marketing</a>
                        <a className="linkfoot">Shipping</a>
                        <a className="linkfoot">Extension Store</a>
                        <a className="linkfoot">eCommerce blog</a>
                        <a className="linkfoot">Development blog</a>
                        <a className="linkfoot">Ideas board</a>
                        <a className="linkfoot">Mobile App</a>
                        <a className="linkfoot">Community</a>
                        <a className="linkfoot">Style Guide</a>
                        <a className="linkfoot">Email Newsletter</a>
                    </div>
                    <div className="productmenu">
                        <h5 className="otherproduct">OTHER PRODUCTS</h5>
                        <a className="linkfoot">Storefront</a>
                        <a className="linkfoot">WooSlider</a>
                        <a className="linkfoot">Sensei</a>
                        <a className="linkfoot">Sensei Extensions</a>
                    </div>
                    <div className="support">
                        <h5 className="supporthead">SUPPORT</h5>
                        <a className="linkfoot">Documentation</a>
                        <a className="linkfoot">Customizations</a>
                        <a className="linkfoot">Support Policy</a>
                        <a className="linkfoot">Contact</a>
                        <a className="linkfoot">COVID-19 Resources</a>
                        <a className="linkfoot">Privacy Notice for</a>
                        <a className="linkfoot">California Users</a>
                    </div>
                    <div className="ourrecommend">
                        <h5 className="recommendation">WE RECOMMENDED</h5>
                        <a className="linkfoot">WooExperts</a>
                        <a className="linkfoot">Hosting Solutions</a>
                        <a className="linkfoot">Pre-sales FAQ</a>
                        <a className="linkfoot">Success Stories</a>
                        <a className="linkfoot">Design Feedback Group</a>
                    </div>
                </div>

            </div>
            <div className="footwhite">
                <div className="iconscontact">
                    <FaTwitter/>
                    <FaFacebook/>
                    <ImConnection/>
                    <FaInstagram/>
                </div>
                <div className="copyright" >COPYRIGHT WOOCOMMERCE 2020 - TERMS & CONDITIONS  PRIVACY POLICY</div>
                <div><img src={automatic}/></div>
            </div>
        </>
    )
}

export default Footer;