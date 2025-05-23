import React from 'react';
import "../css/ContentSection.css"
import flowers from "../assets/flowers.avif"
import logo from "../assets/logo.avif"
import outside_pic from "../assets/OutsidePic.png"
import AboutMe from "./AboutMe"

const ContentSection = () => {
    return (
        <div>
            <div className="container">
                <div className="left-column">

                    <div className='button-row'>
                        <button className='styled-button'>Wedding + Event</button>
                        <button className='styled-button'>Intimate + Elopement Flowers</button>

                    </div>


                    <p className='about-description'>Welcome to Cranberry Blossoms, your local florist dedicated to
                        bringing beauty and joy to Cranbury, NJ.
                        Our commitment to exceptional customer service and high-quality blooms ensures
                        that each bouquet is a memorable gift.</p>



                    <p className='larger-description'>
                        Whether you're celebrating a special event, expressing sympathy, or simply brightening someone's day, Cranberry Blossoms offers a
                        wide selection of fresh flowers and custom designs to suit your needs. We provide reliable, same-day delivery throughout the Cranbury area,
                        making it easy to share heartfelt sentiments with loved ones.
                        Experience the charm and elegance of our floral creations. Visit us in-store or explore our offerings online at cranberryblossoms.com. Let Cranberry Blossoms
                        be your first choice for flowers in Cranbury, NJ”


                    </p>



                    <div className='button-row'>
                        <button className='styled-button'>Bi-Weekly Subscription</button>
                        <button className='styled-button'>One-Time Flower Delivery</button>

                    </div>

                    <img src={flowers} />




                </div>
                <div className="right-column">
                    <img src={logo} />
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <strong style={{ textTransform: 'uppercase', color: 'rgba(28, 28, 28, .8)' }}>Have an event?</strong>
                    </div>
                    <div className="text-block">
                        <p><span className="highlight">Full Scale Wedding</span> - Includes Personal, Ceremony, Reception + Additional Florals</p>
                        <p><span className="highlight">Intimate/Elopement</span> - Includes Personal Florals</p>
                        <p><span className="highlight">Event</span> - Conferences, Intimate Dinners, Brunches + So Much More!</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>
                        <p><i>Appointment Link</i></p>
                    </div>
                    <img style={{ width: '100%', height: 'auto' }} src={outside_pic} />



                </div>




            </div>


            <div>
                <AboutMe />
            </div>

        </div>

    );
};

export default ContentSection;
