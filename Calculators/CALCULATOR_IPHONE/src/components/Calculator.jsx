import React, { useState } from "react";
import "./Calculator.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

export default function Calculator() {
    const [number, setnumber] = useState(0);
    const [oldNumber, setOldNumber] = useState(0);
    const [operator, setOperator] = useState(0);

    const receiveNumber = (valor) => {
        var newNumber = valor.target.value;
        number === 0 ? setnumber(newNumber) : setnumber(number + newNumber);
    }

    const  receiveOperator = (e) => {
        var operatorinput = e.target.value
        setOperator(operatorinput);
        setOldNumber(number)
        setnumber(0)
    }

    const operators = {
        "+" : () => {setnumber(parseFloat(oldNumber) + parseFloat(number))},
        "-" : () => {setnumber(parseFloat(oldNumber) - parseFloat(number))},
        "*" : () => {setnumber(parseFloat(oldNumber) * parseFloat(number));},
        "/" : () => {setnumber(parseFloat(oldNumber) / parseFloat(number));},
    };

    function makeCalculation() {
        var execFunction = operators[operator];
        execFunction();
    }

    const clear = () => setnumber(0);

    const mudaSinal = () => setnumber(number * (-1));
    
    const mudaParaPorcentagem = () => setnumber(number / 100); 

    return (
        <div>
            <Box m={5}/>
            <Container maxWidth="xs">
                <div className="wrapper">
                    <Box m={12}/>
                    <h1 className="resultado">{number}</h1>

                    <button onClick={clear}>AC</button>
                    <button onClick={mudaSinal}>+/-</button>
                    <button onClick={mudaParaPorcentagem}>%</button>
                    <button className="buttons-orange" onClick={receiveOperator} value="/">/</button>

                    <button className="buttons-gray" onClick={receiveNumber} value={7}>7</button>
                    <button className="buttons-gray" onClick={receiveNumber} value={8}>8</button>
                    <button className="buttons-gray" onClick={receiveNumber} value={9}>9</button>
                    <button className="buttons-orange" onClick={receiveOperator} value="*">*</button>

                    <button className="buttons-gray" onClick={receiveNumber} value={4}>4</button>
                    <button className="buttons-gray" onClick={receiveNumber} value={5}>5</button>
                    <button className="buttons-gray" onClick={receiveNumber} value={6}>6</button>
                    <button className="buttons-orange" onClick={receiveOperator} value="-">-</button>

                    <button className="buttons-gray" onClick={receiveNumber} value={1}>1</button>
                    <button className="buttons-gray" onClick={receiveNumber} value={2}>2</button>
                    <button className="buttons-gray" onClick={receiveNumber} value={3}>3</button>
                    <button className="buttons-orange" onClick={receiveOperator} value="+">+</button>

                    <button className="buttons-gray" onClick={receiveNumber} value={0}>0</button>
                    <button className="buttons-gray" onClick={receiveNumber} value=".">,</button>
                    <button className="buttons-gray" style={{ visibility: "hidden" }}>.</button>
                    <button className="buttons-orange" onClick={makeCalculation}>=</button>
                </div>
            </Container>
        </div>
    );
}
