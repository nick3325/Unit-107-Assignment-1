import "./App.css";
import Foot from "./components/footer";
import NavBar from "./components/navBar";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js";
import Catalog from './components/catalog';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1>Welcome to my Super Online Store</h1>
      <Catalog />
      <Foot></Foot>
    </div>
  );
}

export default App;

