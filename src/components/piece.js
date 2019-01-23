import React from "react";
import { Link } from "react-router-dom";

const PiecePage = (props) => {
    // console.log(props);
    // props are needed to grab the id of the url
    
    return (
    <div>
        <h2>Piece {props.match.params.id}</h2>
            <p>This is from my porfolio PIECE component.</p>
            <p>Displaying the individual piece with id of {props.match.params.id}</p>
        <Link to="/portfolio">Back to the Portfolio</Link>
    </div>
    );
};

export default PiecePage;