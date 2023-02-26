import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import carouselimg1 from '../../images/carouselimg1.png';
import carouselimg2 from '../../images/carouselimg2.png';
import carouselimg3 from '../../images/carouselimg3.png';
import carouselimg4 from '../../images/carouselimg4.png';
import carouselimg5 from '../../images/carouselimg5.png';
import carouselimg6 from '../../images/carouselimg6.png';
import carouselellips1 from '../../images/carouselellips1.png';
import carouselellips2 from '../../images/carouselellips2.png';
import backslide from '../../images/backslide.png';

import './carousel.scss';
import '../../../node_modules/pure-react-carousel/dist/react-carousel.es.css';

const Carusel = () => {

    return(
        <div className="carousel-part">

            <img className="caruselimg1" src={carouselimg1} />
            <img className="caruselimg2" src={carouselimg2} />
            <img className="caruselimg3" src={carouselimg3} />
            <img className="caruselimg4" src={carouselimg4} />
            <img className="caruselimg5" src={carouselimg5} />
            <img className="caruselimg6" src={carouselimg6} />
            <img className="caruselimg7" src={carouselellips1} />
            <img className="caruselimg8" src={carouselellips2} />
            <div>

                <h5 className="storeowners">Trusted by Agencies & Store Owners</h5>
                <div>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={125}
                        totalSlides={6}

                    >
                        <Slider>
                        <Slide index={0}>
                            <div className="item1">
                            <img className="backimg" src={backslide}/>
                            <p className="slidetxt">
                            No other eCommerce platform allows 
                            people to start for free and grow 
                            their store as their business grows. 
                            More importantly, WooCommerce doesn't 
                            charge you a portion of your profits as your business grows!
                            </p>
                            </div>
                        </Slide>
                        <Slide index={1}>
                            <div className="item1">
                                <img className="backimg" src={backslide}/>
                                <p className="slidetxt">
                                    slide2
                                No other eCommerce platform allows 
                                people to start for free and grow 
                                their store as their business grows. 
                                More importantly, WooCommerce doesn't 
                                charge you a portion of your profits as your business grows!
                                </p>
                            </div>
                        </Slide>
                        <Slide index={2}>
                            <div className="item1">
                                <img className="backimg" src={backslide}/>
                                <p className="slidetxt">
                                    slide3
                                No other eCommerce platform allows 
                                people to start for free and grow 
                                their store as their business grows. 
                                More importantly, WooCommerce doesn't 
                                charge you a portion of your profits as your business grows!
                                </p>
                            </div>
                        </Slide>
                        <Slide index={3}>
                            <div className="item1">
                                <img className="backimg" src={backslide}/>
                                <p className="slidetxt">
                                    slide4
                                No other eCommerce platform allows 
                                people to start for free and grow 
                                their store as their business grows. 
                                More importantly, WooCommerce doesn't 
                                charge you a portion of your profits as your business grows!
                                </p>
                            </div>
                        </Slide>
                        <Slide index={4}>
                            <div className="item1">
                                <img className="backimg" src={backslide}/>
                                <p className="slidetxt">
                                    slide5
                                No other eCommerce platform allows 
                                people to start for free and grow 
                                their store as their business grows. 
                                More importantly, WooCommerce doesn't 
                                charge you a portion of your profits as your business grows!
                                </p>
                            </div>
                        </Slide>
                        <Slide index={5}>
                            <div className="item1">
                                <img className="backimg" src={backslide}/>
                                <p className="slidetxt">
                                    slide6
                                No other eCommerce platform allows 
                                people to start for free and grow 
                                their store as their business grows. 
                                More importantly, WooCommerce doesn't 
                                charge you a portion of your profits as your business grows!
                                </p>
                            </div>
                        </Slide>
                        </Slider>
                        <ButtonBack>Back</ButtonBack>
                        <ButtonNext>Next</ButtonNext>
                    </CarouselProvider>

                </div>
            </div>


        </div>
    )
}

export default Carusel