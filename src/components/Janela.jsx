import React from "react";

const Janela = ({expressao, resultado}) => {

    return (
        <div className="janela">
            <p className="expressao">{expressao}</p>
            <p className="resultado">{resultado}</p>
        </div>
    );
};

export default Janela;