import React from "react";
import "./style.css";

import { IoBackspaceOutline } from "react-icons/io5";

const icons = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    0: "0",
    "/": "/",
    "*": "*",
    "-": "-",
    "+": "+",
    "=": "=",
    AC: "AC",
    DE: "DE",
    "<<": <IoBackspaceOutline size="30px" id="<<"/>,
    "+-": "+-",
    ",": ",",
};

function Key({ symbol, id }) {
    return <button className="keys" id={id}>{icons[symbol]}</button>;
}

export default Key;
