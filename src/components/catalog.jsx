import { useEffect, useState } from 'react';
import Product from './product';
import DataService from './dataService';


const Catalog = () => {
    const [products, setProducts] = useState([]);

    const loadData = () => {
        console.log('component loaded')

        let service = new DataService();
        let data = service.getCatalog();
        setProducts(data);
    }

    //when the component loads
    useEffect(() => {
        loadData();
    });

    //Create an state variable (products)
    //set data (from loadData) to the state variable
   
  return(
      <div className="catalog">
          <h3>Our Amazing Fitness Supplement Catalog</h3>
          <h5>There are {products.length} products</h5>
            {console.log("compontent rendered")}
            {products.map((p) => (
            <Product key={p._id} data = {p} />
            ))}
      </div>
  );
};

export default Catalog