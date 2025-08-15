import React, {useState} from 'react'
import "./calculator.css"

const Calculator = () => {
    const [expr, setExpr] = useState("0")

    const press = (ch) => {
        setExpr(prev => prev === '0' ? ch : prev + ch) // Fixed order!
    }

    // Add these three functions:
    const clearAll = () => setExpr("0")

    const backspace = () => {
        setExpr(prev => prev.length <= 1 ? "0" : prev.slice(0, -1))
    }

    const equals = () => {
        try {
            const result = Function(`"use strict"; return (${expr})`)()
            setExpr(String(result))
        } catch {
            setExpr("Error")
            setTimeout(() => setExpr("0"), 1000) // Auto-clear error
        }
    }

    return (
        <div className="calculator-container">
            <div className="display-container">{expr}</div> {/* Show actual expression! */}
            <div className="buttons-container">
                <button onClick={() => press('7')}>7</button> {/* Add onClick! */}
                <button onClick={() => press('8')}>8</button>
                <button onClick={() => press('9')}>9</button>
                <button onClick={() => press('/')}>/</button>

                <button onClick={() => press('4')}>4</button>
                <button onClick={() => press('5')}>5</button>
                <button onClick={() => press('6')}>6</button>
                <button onClick={() => press('*')}>*</button> {/* Fixed escape */}

                <button onClick={() => press('1')}>1</button>
                <button onClick={() => press('2')}>2</button>
                <button onClick={() => press('3')}>3</button>
                <button onClick={() => press('-')}>-</button>

                <button onClick={() => press('0')}>0</button>
                <button onClick={() => press('.')}>.</button>
                <button>= {/* We'll handle this separately */}</button>
                <button onClick={() => press('+')}>+</button>
                <button onClick={clearAll}>C</button>
                <button onClick={backspace}>⌫</button>
                <button onClick={equals}>=</button>

            </div>
        </div>
    )
}

export default Calculator
