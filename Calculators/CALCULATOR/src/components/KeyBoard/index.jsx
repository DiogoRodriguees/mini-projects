import React from "react";
import "./style.css";
import RowKeyBoard from "../RowKeyBoard";

function KeyBoard({ captureKey }) {
    return (
        <tbody className="keyboard" onClick={captureKey}>
            <RowKeyBoard symbols={["AC", "DE", "<<", "/"]} />
            <RowKeyBoard symbols={["7", "8", "9", "*"]} />
            <RowKeyBoard symbols={["4", "5", "6", "-"]} />
            <RowKeyBoard symbols={["1", "2", "3", "+"]} />
            <RowKeyBoard symbols={["+-", "0", ",", "="]} />
        </tbody>
    );
}

export default KeyBoard;
