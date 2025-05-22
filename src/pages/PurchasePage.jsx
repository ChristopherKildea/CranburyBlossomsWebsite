import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/PurchasePage.css"
import Modal from "../components/Modal"




const PurchasePage = () => {
  const { id } = useParams();
  const [flower, setFlower] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch("/data/flowers.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((f) => String(f.id) === id);
        setFlower(found);
      });
  }, [id]);

  if (!flower) return <p>Loading flower info...</p>;




const handlePurchase = async (e) => {

    setIsOpen(true);
    console.log("Opening modal!", { selectedSize, quantity });
    
};


  return (
    <div className="purchase-page-container">


        


        <div className="purchase-page-image">
            <img src={flower.image} alt={flower.name} />
        </div>


        <div className="purchase-page-text-container">
            
        
            <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
            
            
            <h1>{flower.name}</h1>
            <p>${flower.price.toFixed(2)}</p>

            
    
            <p>{flower.description}</p>

            <div className="delivery-info">
                <p><em>We offer three-weekday delivery options -</em></p>
                <ul>
                    <li>For Monday delivery, orders must be made by Friday at 5 p.m</li>
                    <li>For Wednesday delivery, orders must be made by Monday at 5 p.m.</li>
                    <li>For Friday delivery, orders must be made by Wednesday at 5 p.m.</li>
                </ul>
            </div>
            

            <p style={{fontWeight: 'bold'}}><em>All deliveries must be in our approved delivery areas which can be found here.</em></p>




            <div className="dropdown-group">
                <label htmlFor="delivery">Size:</label>
                    <select 
                        id="delivery" 
                        name="delivery"
                        value={selectedSize}
                        onChange={(e) => setSelectedSize(e.target.value)}
                        >
                        <option value="" hidden>Select Size</option>
                        <option value="Small">Monday</option>
                        <option value="Medium">Wednesday</option>
                        <option value="Large">Friday</option>
                    </select>
            </div> 


            <div className="quantity-group">
                <label htmlFor="quantity">Quantity:</label>
                <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                />
            </div>

            


            <button onClick={handlePurchase} className="purchase-button">Purchase</button>

        </div>

    </div>

  );
};

export default PurchasePage;
