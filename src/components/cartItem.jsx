
import { useContext } from 'react';
import storeContext from './../store/storeContext';
const CartItem = (props) =>{
   const {removeProductFromCart} = useContext(storeContext);


    const getTotal = () =>{
        let total = props.data.price * props.data.quantity;
        return "$" + total.toFixed(2);
    };

    const removeProd = () =>{
            removeProductFromCart(props.data._id);
    }




return(
    <div className="cart-item">
        <img src={"/images/" + props.data.img} alt="Product" />
        <div className="cart-info">
            <h5>{props.data.title}</h5>
            <label>${props.data.category}</label>
        </div>
            <label className="price">{props.data.price.toFixed(2)}</label>
            <label className="quantity">{props.data.quantity}</label>
            <label className="total">${getTotal()}</label>
            <button onClick={removeProd} className="btn btn-sm btn-primary">Remove</button>
        </div>
    
    )
};

export default CartItem;


