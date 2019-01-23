import React from "react";
import { Link } from "react-router-dom";

const PortfolioPage = () => {
    // console.log(props); //if "props" is in function above
    
    return (
    <div>
        <h2>My Portfolio</h2>
            <p>This is from my PORTFOLIO component.<br/>
        (showing pieces I link to)</p>
        <ul>
            <li><Link to="/portfolio/1">Piece 1</Link></li>
            <li><Link to="/portfolio/2">Piece 2</Link></li>
        </ul>
    </div>
    );
};

export default PortfolioPage;