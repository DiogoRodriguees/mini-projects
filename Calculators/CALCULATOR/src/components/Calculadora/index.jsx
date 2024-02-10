import React, { useState, useEffect } from "react";
import "./style.css";
import Display from "../Display";
import KeyBoard from "../KeyBoard";
import { operations } from "../../functions/DefineOperation";

function Calculadora() {
    const validateNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const validateOperators = ["+", "-", "/", "*", "="];
    const controlers = ["AC", "<<", "DE", "+-", ","];

    const [firstDigit, setFirstDigit] = useState("0");
    const [secondDigit, setSecondDigit] = useState("");
    const [showResult, setShowResult] = useState("0");
    const [isNewNumber, setIsNewNumber] = useState(true);
    const [operator, setOperator] = useState("");

    const execFunctions = {
        AC: () => {
            setFirstDigit("0");
            setSecondDigit("");
            setIsNewNumber(true);
            setShowResult("0");
            setOperator("");
        },
        DE: () => {
            setFirstDigit("0");
        },
        "+-": () => {
            let newResult = firstDigit * -1;
            setFirstDigit(newResult);
        },
        "<<": () => {
            let newResult = (firstDigit - (firstDigit % 10)) / 10;
            setFirstDigit(newResult);
        },
        ",": () => {
            if (firstDigit.indexOf(".") === -1) {
                let newResult = firstDigit + ".";
                setFirstDigit(newResult);
            }
        },
    };
    function others(key) {
        let newFunc = execFunctions[key];
        newFunc();
    }

    function calculate() {
        let firstDigitInNumber = parseFloat(firstDigit);
        let secondDigitInNumber = parseFloat(secondDigit);

        let operation = operations[operator];

        let result = operation(secondDigitInNumber, firstDigitInNumber);

        let resultInString = result.toString();
        return resultInString;
    }

    function executeOperation() {
        let result = calculate();

        setShowResult(result);
        setSecondDigit(result);
    }

    function saveDigit(digit) {
        if (isNewNumber) {
            setFirstDigit(digit);
        } else {
            setFirstDigit(firstDigit + digit);
        }
        setIsNewNumber(false);
    }

    const verifyNumber = (key) => validateNumbers.includes(key);
    const verifyOperator = (key) => validateOperators.includes(key);
    const verifyControler = (key) => controlers.includes(key);
    const operationPendente = () => operator !== "";

    function defineOperation(keyPress) {
        if (verifyOperator(keyPress)) {
            // if(isNewNumber){
            //     setOperator(keyPress)
            //     return
            // }
            if (operationPendente()) {
                executeOperation();
            }else{
                setSecondDigit(firstDigit);
            }
            if (keyPress !== "=" && !isNewNumber) {
                setOperator(keyPress);
                setIsNewNumber(true);
            }
        }
        if (verifyNumber(keyPress)) {
            saveDigit(keyPress);
        }
        if (verifyControler(keyPress)) {
            others(keyPress);
        }
    }

    function receiveKey(e) {
        let keyPress = e.target.id;
        defineOperation(keyPress);
    }

    useEffect(() => {
        setShowResult(firstDigit);
    }, [firstDigit]);

    return (
        <div className="container-calculator">
            <Display result={showResult} />
            <KeyBoard captureKey={receiveKey} />
        </div>
    );
}

export default Calculadora;
