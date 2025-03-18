import React from "react";

const KeysJanela = ({handleButton}) => {

    const cieKeys = ["sin", "cos", "ln", "log", "tan", "π", "e", "^", "!", "√"];

    const normalKeys = ["7", "8", "9", "x", "÷", "4", "5", "6", "-", "(", "1", "2", "3", "+", ")", ".", "0", "DEL", "AC", "="];

    return (
        <div className="keysJanela">
        <div className="keys_cientifico">
           {cieKeys.map((item, index)=>(
            <button key={index} onClick={() => handleButton(item)}>
                {item}
            </button>
           ))} 
        </div> 
        <div className="line"></div>
        <div className="keys_normal">
           {normalKeys.map((item, index)=>(
            <button 
                key={index}
                className={`${item >= "0" && item <= "9" ? "numero" : ""} ${item === "=" ? "igual" : ""}`}
                onClick={() => handleButton(item)}
                >
                {item}
            </button>        
           ))} 
        </div> 
        </div>
    );
};

export default KeysJanela;