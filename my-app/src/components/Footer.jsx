import React from "react";
import ReactDOM from "react-dom";


var date = new Date();
var currentYear = date.getFullYear();

function Footer(){
    
    return ( <footer>
    
    <p>Copyright  © {currentYear}</p>

    </footer>
)}


export default Footer;