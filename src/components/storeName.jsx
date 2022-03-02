import './home.css'
import {Link} from "react-router-dom"
import Catalog from './catalog';
const DisplayStore = () => {
    return(
        <div>
            <h1>Nick's Fitness Store</h1>
            <h2>Owned by Nicholas Lucien</h2>
            <Link className='btn btn-info btn-lg' to="/catalog">
                Fitness Catalog
            </Link>
        </div>
    )
};

export default DisplayStore;