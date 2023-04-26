import React from "react";
import "./style.css";

function Display({result}) {
    return (
        <div className="display">
            <p>{result}</p>
        </div>
    );
}

export default Display;
