import React from 'react';
import "../css/AboutMe.css"
import Me from "../assets/Me.png"
import logo from "../assets/logo.avif"


const ContentSection = () => {
    return (
        <div className='about-container-background'>

            <div className="about-container">


                <div className='left-about-column'>

                    <img className='about-me-img' src={Me} />

                </div>


                <div className='right-about-column'>

                    <img className='about-me-img' src={logo} />

                    <p style={{ fontWeight: 'bold' }}>About Me</p>


                    <p style={{ color: 'rgba(0,0,0,.5)' }}>
                        Hello! I’m Christopher Kildea, the proud owner of Cranbury Blossoms. My passion for flowers
                        and creating beautiful arrangements has been at the heart of my journey. At Cranbury Blossoms,
                        I believe that flowers have the power to brighten any moment, from weddings and celebrations to
                        everyday surprises. My team and I are dedicated to crafting unique, vibrant floral designs tailored to
                        each customer’s vision. Whether you're celebrating a special occasion or just looking to add a touch of nature’s
                        beauty to your day, we’re here to help make it memorable. Come visit us and let us bring your floral dreams to life!
                    </p>

                </div>

            </div>


        </div>

    );
};

export default ContentSection;
