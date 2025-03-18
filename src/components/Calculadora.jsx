import React, { useState } from "react";
import Janela from "./Janela";
import KeysJanela from "./KeysJanela";

const Calculadora = () => {
  const [expressao, setExpressao] = useState("");
  const [exibirEXP, setExibirEXP] = useState("");
  const [resultado, setResultado] = useState("0");

  const cieFunc = {
    sin: "Math.sin",
    cos: "Math.cos",
    tan: "Math.tan",
    ln: "Math.log",
    log: "Math.log10",
    π: "Math.PI",
    e: "Math.E",
    "^": "**",
    "√": "Math.sqrt",
  };

  function substituirOperadores(exp) {
    return exp.replace(/÷/g, "/").replace(/x/g, "*");
  }

  function calcResultado() {
    if (expressao.length !== 0) {
      try {
        let expressaoAlterada = expressao;

        if (expressaoAlterada.includes("√(") && !expressaoAlterada.includes(")")) {
          expressaoAlterada += ")";
        }

        expressaoAlterada = substituirOperadores(expressaoAlterada);
        let compute = eval(expressaoAlterada);
        setResultado(compute);
      } catch (error) {
        setResultado("Ocorreu um erro!");
      }
    } else {
      setResultado("Ocorreu um erro!");
    }
  }

  function handleButton(value) {
    if (value === "AC") {
      setExpressao("");
      setExibirEXP("");
      setResultado("0");
    } else if (value === "DEL") {
      setExibirEXP(exibirEXP.slice(0, -1));
      setExpressao(expressao.slice(0, -1));
    } else if (cieFunc.hasOwnProperty(value)) {
      if (value === "√") {
        setExibirEXP(exibirEXP + value + "(");
        setExpressao(expressao + "Math.sqrt(");
      } else {
        setExibirEXP(exibirEXP + value);
        setExpressao(expressao + cieFunc[value]);
      }
    } else if (value === "!") {
      const ultNum = extrairUltNum(expressao);
      if (ultNum != null) {
        const num = parseFloat(ultNum);
        setExibirEXP(exibirEXP + value);
        setExpressao(expressao.replace(ultNum, factorial(num)));
      }
    } else if (value === "=") {
      let expressaoAlterada = expressao;
      let contadorParentesesAbertos = (expressao.match(/\(/g) || []).length;
      let contadorParentesesFechados = (expressao.match(/\)/g) || []).length;

      if (contadorParentesesAbertos > contadorParentesesFechados) {
        expressaoAlterada += ")".repeat(contadorParentesesAbertos - contadorParentesesFechados);
      }

      calcResultado();
    } else {
      setExibirEXP(exibirEXP + value);
      setExpressao(expressao + value);
    }
  }

  function factorial(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) resultado *= i;
    return resultado;
  }

  function extrairUltNum(exp) {
    const numeros = exp.match(/\d+/g);
    return numeros ? numeros[numeros.length - 1] : null;
  }

  return (
    <div className="calculadora">
      <Janela expressao={exibirEXP} resultado={resultado} />
      <KeysJanela handleButton={handleButton} />
    </div>
  );
};

export default Calculadora;
