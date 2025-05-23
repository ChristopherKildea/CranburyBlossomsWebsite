import { Link } from "react-router-dom";
import ReactDom from 'react-dom'
import "../css/Modal.css"
import { useEffect, useState } from "react";




function Modal({open, children, onClose}) {

    const [formData, setFormData] = useState({
        senderPhone: { area: "", prefix: "", line: "" },
        recipientName: "",
        recipientPhone: { area: "", prefix: "", line: "" },
        note: "",
        agreed: false
    });

    const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    if (!formData.agreed) {
        alert("You must agree to the terms before proceeding.");
        return;
    }

    console.log("Submitting data:", formData);

    // TODO: send data to backend, or perform any action
    };



    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name.startsWith("senderPhone.") || name.startsWith("recipientPhone.")) {
        const [group, key] = name.split(".");
        setFormData((prev) => ({
            ...prev,
            [group]: { ...prev[group], [key]: value }
        }));
        } else {
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
        }
    }

    if (!open) {
        console.log("Modal not open")  
        return null
    } 


    return ReactDom.createPortal (
    <>

        
        <div className="modalBackground">
            <div className="modalContainer">

       

              

                <div className="top-row">
                    <p>Delivery Info</p>

                    <button className={"titleCloseBtn"} onClick={onClose}>X</button>

                </div> 

            
                <form onSubmit={handleSubmit}>
                        <div className="form-component">
                            <p className="label-title"> Your Phone # </p>
                            <div className="phone-row">
                                <input
                                name="senderPhone.area"
                                value={formData.senderPhone.area}
                                onChange={handleChange}
                                className={"input-box phone-box"}
                                />

                                <input
                                name="senderPhone.prefix"
                                value={formData.senderPhone.prefix}
                                onChange={handleChange}
                                className={"input-box phone-box"}
                                />

                                <input
                                name="senderPhone.line"
                                value={formData.senderPhone.line}
                                onChange={handleChange}
                                className={"input-box phone-box"}
                                />

                            </div>
                        </div>

                        <div className="form-component">
                            <p className="label-title"> Recipient's Name </p>
                            <input
                            name="recipientName"
                            value={formData.recipientName}
                            onChange={handleChange}
                            className={"input-box name-box"}
                            />  
                        </div>



                        <div className="form-component">
                            <p className="label-title"> Recipient's Phone Number </p>
                            <div className="phone-row">
                                <input
                                name="recipientPhone.area"
                                value={formData.recipientPhone.area}
                                onChange={handleChange}
                                className={"input-box phone-box"}
                                />

                                <input
                                name="recipientPhone.prefix"
                                value={formData.recipientPhone.prefix}
                                onChange={handleChange}
                                className={"input-box phone-box"}
                                />

                                <input
                                name="recipientPhone.line"
                                value={formData.recipientPhone.line}
                                onChange={handleChange}
                                className={"input-box phone-box"}
                                />

                            </div>
                        </div>


                        <div className="form-component">
                                <p className="label-title"> Special Note to Recipient. Please type exactly how you would like the card to read. (Optional)  </p>
                                <textarea
                                name="note"
                                value={formData.note}
                                onChange={handleChange}
                                className={"input-box note-box"}
                                />  
                        </div>


                        <div className="form-component">
                            <p className="label-title"> I have read and understand the delivery information made available to me on the F.A.Q. page prior to placing this order.  </p>
                            <label>
                                <input
                                type="checkbox"
                                name="agreed"
                                checked={formData.agreed}
                                onChange={handleChange}
                                
                                />
                                Yes (must be checked in order to proceed)
                            </label>
                        </div>


                        <div className="form-component">
                            <button type="submit" className="modal-purchase-button">Purchase</button>
                        </div>
                        



                </form>





         

            </div>
            
        </div>


        

    </>,
    document.getElementById('portal')

    )
}

export default Modal    