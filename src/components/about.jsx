import { useState } from "react";
import "./quantityPicker.css"
const About = () =>{
    let[name, setName] = useState("");
    const[visible,setVisible] = useState(false)
    const handleShowName = () =>{
        setName("Nicholas Lucien")
        setVisible(true);
    }
const getMyInfo = () => {
    if(visible){
        return( <div>
                    <h1>Nicholas Lucien</h1>
                    <h6>nicklucien@gmail.com</h6>
                    <ul>
                        
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
        )
       
    }else return "";
};

//
    return(
        <div className="about-page">
           {getMyInfo()}
           <button onClick={handleShowName}>Click to see my name</button>
        </div>
    );
};

//simple change for git
export default About;