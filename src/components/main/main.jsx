import React from "react";
import Group8 from '../../images/Group 8.png';
import Group7 from '../../images/Group 7.png';
import Group5 from '../../images/Group 5.png';
import Bitmap from '../../images/Bitmap.png';
import image15 from '../../images/image 15.png';
import Stripe from '../../images/Stripe-Logo 1.png';
import Paypal from '../../images/PayPal-Logo 1.png';
import bank from '../../images/bankimg.png';
import Applepay from '../../images/Applepay.png';
import clients from '../../images/clients.png';
import employees from '../../images/employees.png';
import facebook from '../../images/facebook.png';
import Googleads from '../../images/Googleads.png';
import Jetpack from '../../images/Jetpack.png';
import monkey from '../../images/monkey.png';
import payment from '../../images/payment.png';
import planshet from '../../images/planshet.png';
import square from '../../images/square.png';
import teamwork from '../../images/teamwork.png';
import collectivework from '../../images/collectivework.png';
import consultation from '../../images/consultation.png';
import union from '../../images/Union.png';
import ourdevelopment from '../../images/ourdevelopment.png';
import ourconsultation from '../../images/ourconsultation.png';

import carouselellips1 from '../../images/carouselellips1.png';
import group13 from '../../images/Group 13.png';
import peoples from '../../images/peoples.png';
import radius from '../../images/radius.png';
import './main.scss';
import Footer from "../Footer/Footer";
import Carusel from "../Carousel/carousel";


const Main = () => {

    return(
        <>
            <div className="landing">
                <div className="landingtxt">
                    <h5 className="landinghead">Building exactly the eCommerce website you want.</h5>
                    <p className="txtcommerce">WooCommerce is a customizable, open-source eCommerce platform built on WordPress. Get started quickly and make your way.</p>
                    <div className="linktonewstore">
                        <button className="newstore">Start a New Store</button> or
                        <a className="customize">  Customize & Extend ›</a>
                    </div>
                </div>
                <div className="landingsale">
                    <p>
                        <img className="group8" src={Group8} />
                    </p>
                    <p>
                        <img className="group7" src={Group7}/>
                    </p>
                    <p>
                        <img className="group5" src={Group5}/>
                    </p>

                    <div className="buyproduct">
                    
                        <img className="girls" src={image15}/>
                        <div className="payforms">
                            <div className="stripe">
                                <img src={Stripe}/>
                                <div className="paytxt">Stripe gateway</div>
                                <label className="switch">
                                    <input type="checkbox"/>
                                    <span className="slider"/>
                                </label>
                            </div>
                            <div className="paypal">
                                <img src={Paypal}/>
                                <div className="paytxt">Paypal payments</div>
                                <label className="switch">
                                    <input type="checkbox"/>
                                    <span className="slider"/>
                                </label>
                            </div>
                            <div className="bank">
                                <img src={bank}/>
                                <div>Bank Transfers</div>
                                <label className="switch">
                                    <input type="checkbox"/>
                                    <span className="slider"/>
                                </label>
                            </div>
                        </div>

                        <div>

                            <img className="bitmap" src={Bitmap}/>
                            <button className="shop">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
                                </svg>
                            </button>
                        </div>

                        <div>
                            <div className="productmarka">
                                <p className="shoes">SHOES</p>
                                <p className="marka">Adidas Originals</p>
                            </div>
                            <p className="adidas">Adidas Originals <br/> OG Sneakers</p>
                            <div className="sizeproduct">
                                <button className="boxsize">7</button>
                                <button className="boxsize">7.5</button>
                                <button className="boxsize">8</button>
                                <button className="boxsize">8.5</button>
                                <button className="boxsize">9</button>
                            </div>
                            <div className="productprice">
                                <div>
                                    <p className="saleprice">$344</p> <br/>
                                    <span className="mainprice">$560</span>
                                </div>
                                <div className="addproductpart">
                                    <button className="increment">-</button>
                                    <button className="counter">1</button>
                                    <button className="decrement">+</button>
                                </div>
                            </div>
                            <button className="addtocart">Add to cart</button>
                        </div>
                        
                    </div>
                </div>

            </div>
            <div className="features-section">
                <h5 className="simplehead">Your eCommerce <br/> made simple</h5>
                <div className="startsimple">
                    <div className="startsimpleimages">
                        <img className="consul" src={consultation}/>
                        <img className="apple" src={Applepay} />
                        <img className="payment" src={payment} />
                        <h5 className="alltostart">All You Need to Start</h5>
                        <p className="addplugin">Add WooCommerce plugin to any WordPress site and set up a new store in minutes.</p>
                        <a className="wordpress">Ecommerce for Wordpress ›</a>
                    </div>
                    <div className="planshetpart">
                        <img className="planshet" src={planshet} />
                        <img className="jetpack" src={Jetpack} />
                        <img className="googleads" src={Googleads} />
                        <img className="facebook" src={facebook} />
                        <img className="monkey" src={monkey} />
                        <img className="square" src={square} />
                        <h5 className="extend">Customize and Extend</h5>
                        <p className="gymclass">From subscriptions to gym classes to luxury cars, WooCommerce is fully customizable.</p>
                        <a className="browse">Browse Extensions ›</a>
                    </div>
                    <div>
                        <img className="employees" src={employees} />
                        <img className="clients" src={clients} />
                        <img className="teamwork" src={teamwork} />
                        <img className="collective" src={collectivework} />
                        <h5 className="community">Active Community</h5>
                        <p className="fastgrow">WooCommerce is one of the fastest-growing eCommerce communities. </p>
                        <a className="ourforums">Check our Forums ›</a>
                    </div>
                </div>
            </div>
            <div className="about-section">
                <div className="develop-part">
                    <div className="union">
                        <img src={union} />
                    </div>
                    <div className="ellipse1"></div>
                    <div className="ellipse2"></div>
                    <div className="markalist">
                        <img src={Group8}/>
                    </div>
                    <div className="ellipse3"></div>
                    <div className="ellipse4"></div>
                    <div className="markalist2">
                        <img src={Group7} />
                    </div>

                    <div className="developlimits">
                        <div  className="ourdevelopment">
                            <img src={ourdevelopment} /> 
                        </div>
                        <div>
                            <h5 className="withoutlimits">Develop <br/> Without Limits</h5>
                            <p className="limitstxt">
                               WooCommerce is developer friendly, too. 
                               Built with a REST API, WooCommerce is scalable 
                               and can integrate with virtually any service. 
                               Design a complex store from scratch, extend 
                               a store for a client, or simply add a single 
                               product to a WordPress site—your store, your way.
                            </p>
                            <button className="linktodocumentation">Read the  Documentation</button>
                        </div>
                    </div>
                    <div className="ourcommunity">
                        <div  className="ourconsultation">
                            <img src={ourconsultation}/>
                        </div>
                        <div>
                            <h5 className="globalcommunity">Know our <br/> Global Community</h5>
                            <p className="aboutcommunity">
                               WooCommerce is one of the fastest-growing 
                               eCommerce communities. We’re proud that the 
                               helpfulness of the community and a wealth of 
                               online resources are frequently cited as reasons 
                               our users love it. There are 80+ meetups worldwide!
                            </p>
                            <button className="linktodoc">Read the  Documentation</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="reviews">
                <Carusel/>
            </div>
            <div className="people-section" >
                <img className="group13" src={group13}/>
                <img className="ellipspeople" src={carouselellips1}/>
                <img className="radius" src={radius}/>

                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>

                <div>
                    <h5 className="realpeople">Supported by real people</h5>
                    <p className="peopletxt">
                    Our team of Happiness Engineers works 
                    remotely from 58 countries providing <br/>
                    customer support across multiple time zones.
                    </p>
                    <img className="peopleimg" src={peoples}/>
                </div>
                <div className="darkblue">
                    <p className="startbusiness">WooCommerce - the most customizable eCommerce platform for building your online business.</p>
                    <button className="businessbtn">GET STARTED</button>
                </div>

            </div>
            <div>
                <Footer/>
            </div>
        </>
    )
}

export default Main