import { useState } from "react";
import "./quantityPicker.css"
const QuantityPicker = (props) =>{
    let [quantity, setQuantity] = useState(1);

    const handleIncrease = () =>{
        console.log("plus clicked");
        let value = quantity + 1;
        setQuantity(value)
        props.onChange(value); //call the function from the parent
    };

    const handleDecrease = () =>{
        let value = quantity-1;
        // if the value is greater or equal to 1, set it 
        if(value > 0){
            setQuantity(value);
            props.onChange(value);
        }
    }

    return(
        <div className="quantity-picker">
            <button className="btn btn-sm btn-info" onClick={handleIncrease}>+</button>
            <label>{quantity}</label>
            <button className="btn btn-sm btn-info" disabled={quantity===1} onClick={handleDecrease}>-</button>
        </div>
    );
};

export default QuantityPicker;