import { useState } from "react";
import "./quantityPicker.css"
const About = () =>{
    let[name, setName] = useState("");

    const handleShowName = () =>{
        setName("Nicholas Lucien")
    }

    return(
        <div className="about-page">
           <h1>{name}</h1>
           <button onClick={handleShowName}>Click to see my name</button>
        </div>
    );
};

export default About;