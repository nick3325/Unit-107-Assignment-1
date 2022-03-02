import "./admin.css"
import { useState } from 'react';

const Admin = () =>{
   
   const[product, setProduct] = useState({});
   const[coupon, setCoupon] = useState({});
   const[allCoupons, setAllCoupons] = useState([]);


   const saveCoupon = (e) =>{
       let copy = [...allCoupons]; //create a copy
       copy.push(coupon)//modify copy
       setAllCoupons(copy); //set the copy as the new value
   }

   const discountCoupon = (e) =>{
        let copy = {...coupon}; //create a copy
        copy.discount = parseFloat(e.target.value); //modify copy
        setCoupon(copy); //set the copy as the new value
}


    const codeChange = (e) =>{
        let copy = [...coupon]; //create a copy
        copy.discount = e.target.value; //modify copy
        setCoupon(copy); //set the copy as the new value
    }
  const prodChange = (e) =>{
      let name = e.target.name;
      let value = e.target.value;

      console.log(name,value);
      let copy = {...product}
      copy[name] = value;
      setProduct(copy) //set the copt
  }
   
   
    return (
    
        
        <div className="admin-page">
            <h1>Store Manager</h1>
            <div className="admin-container">
                
                <div className="form">
                <div className="prods">
                    <h3>Register new products</h3>
                </div>
                    <div>
                        <label className="form-label">Title</label>
                        <input onChange={prodChange} type="text" name="title" className="form-control" />
                    </div>

                    <div>
                        <label className="form-label">Image</label>
                        <input onChange={prodChange} type="text" name="Image" className="form-control" />
                    </div>

                    <div>
                        <label className="form-label">Category</label>
                        <input onChange={prodChange} type="text" name="Category" className="form-control" />
                    </div>

                    <div>
                        <label className="form-label">Price</label>
                        <input onChange={prodChange} type="text" name="Price" className="form-control" />
                    </div>

                    <button className="btn btn-dark">Register Product</button>
                </div>
                
                
                
                <div className="coupons">
                   
                    <h3>Coupon Codes</h3>
                    <div className="form">
                        <div>
                            <label htmlFor="form-label">Code</label>
                            <input onClick={saveCoupon} type="text" className="form-control" />
                        </div>

                        <div>
                            <label htmlFor="form-label">Discount</label>
                            <input onChange={discountCoupon} type="number" className="form-control" />
                        </div>
                        
                        <button className="btn btn-dark" onClick={codeChange}>Register</button>
                    </div>
                    <h4>Valid Coupons</h4>
                        <ul>
                            {allCoupons.map((c, index) => <li key={index}>{c.code} - {c.discount}%</li>)}
                        </ul>
                </div>
            </div>
        </div>



    )
}

export default Admin