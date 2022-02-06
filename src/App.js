import "./App.css";
import Foot from "./components/footer";
import NavBar from "./components/navBar";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js";
import Catalog from './components/catalog';
import ToDo from "./components/todo"
import About from './components/about';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <About />
      <h1>Welcome to my Super Online Store</h1>
      <Catalog />
      <ToDo></ToDo>
      <Foot></Foot>
    </div>
  );
}

export default App;

