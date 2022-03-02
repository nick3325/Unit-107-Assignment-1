import "./cart.css"
import { useContext } from 'react';
import storeContext from './../store/storeContext';
import CartItem from "./cartItem";
const Cart = () =>{

    const {cart} = useContext(storeContext)
    return (
        <div className="cart">
            <h1>Cart: {cart.length} Fitness Products</h1>

            <div className="products">
                <ul>
                    {cart.map((prod => <CartItem key={prod._id} data={prod}></CartItem>))}
                </ul>
            </div>
        </div>    
     ) ;
}

export default Cart;