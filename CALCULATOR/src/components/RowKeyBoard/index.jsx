import React from "react";
import Key from "../Key";

import "./style.css";

function RowKeyBoard({ symbols }) {
    return (
        <tr className="keyboard-line">
            {symbols.map(symbol => (
                <td key={symbol}>
                    <Key symbol={symbol} id={symbol}/>
                </td>
            ))}
        </tr>
    );
}

export default RowKeyBoard;
