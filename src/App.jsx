import React, { useState, useEffect } from "react";
import Calculadora from "./components/Calculadora";

const App = () => {
  const [tema, setTema] = useState(localStorage.getItem("tema") || "dark");

  useEffect(() => {
    localStorage.setItem("tema", tema);
    document.body.setAttribute("data-tema", tema);
  }, [tema]);

  const alternarTema = () => {
    setTema((prevTema) => (prevTema === "dark" ? "light" : "dark"));
  };

  return (
    <div className="App">
      <button className="btn-tema" onClick={alternarTema}>
        {tema === "dark" ? "☀️ Modo claro" : "🌑 Modo escuro"}
      </button>
      <Calculadora />
      
      <p className="developer">
        Desenvolvido por <a href="https://github.com/vicmariucha" target="_blank" rel="noopener noreferrer">Vic Mariucha 👇</a>
      </p>

      <div className="social-links">
        <a href="https://github.com/vicmariucha" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/vicmariucha/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      
    </div>
  );
};

export default App;
