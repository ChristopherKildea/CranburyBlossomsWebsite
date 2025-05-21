import { Link } from "react-router-dom";
import "../css/SocialContent.css"
import { useState } from "react";


function SocialContent() {



    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubscribe = async (e) => {
        console.log("Hiiii!!")
        e.preventDefault();
        
        console.log("Subscribed!", { firstName, lastName, email });
    };


    return <div className="social-content">


        <div className="contact-info">

            <p style={{ fontSize: '60px',fontFamily: 'freight-big-pro, serif', fontWeight: '300' }}>
                Get in the know.
            </p>

            <p style={{ fontSize: '18px', color: '#333333'}}>Sign up with your email address to receive news and updates.</p>


            <form onSubmit={handleSubscribe}>

                <div className="content-button-row">
                    <input 
                        className="content-button"
                        type="text"
                        placeholder="First name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />

                    <input 
                        className="content-button"
                        type="text"
                        placeholder="Last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />



                    <input 
                        className="content-button"
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />


                <button type="submit" className="search-button">
                    Subscribe
                </button> 

                </div>




            </form>
            



        </div>

    </div>


}

export default SocialContent