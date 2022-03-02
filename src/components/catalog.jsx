import { useEffect, useState } from 'react';
import Product from './product';
import DataService from './dataService';
import ToDo from './todo';


const Catalog = () => {
    const [products, setProducts] = useState([]);

    const loadData = async () => {
        console.log('component loaded')

        let service = new DataService();
        let data = await service.getCatalog();
        setProducts(data);
    }

    //when the component loads
    useEffect(() => {
        loadData();
    }, []);

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
            <ToDo></ToDo>
      </div>
  );
};

export default Catalog