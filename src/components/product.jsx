
import QuantityPicker from './quantityPicker';
import "./product.css"
const Product = (props) =>{
    return(
        <div className="product">
            <img src={"/images/" + props.data.img} alt="Product" />
            <h5>{props.data.title}</h5>

        <div className="price-info">
            <label className="total">$20.00</label>
            <label className="price">${props.data.price}</label>
        </div>
            <QuantityPicker />
            <button className="btn btn-sm btn-primary">Add to cart</button>
        </div>
    );
};

export default Product;

//on the product JSX need to render 
//an image 
//title 
//the price
//the total 
//QP
//Button to add cart 