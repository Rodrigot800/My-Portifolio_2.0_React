import { useState } from "react";
import React from "react";
import IconesDescrição from "../body/ícones_descrição/ícones";

function Apresentação3() {
  const imagemDescrição = () => {
    return (
      <img
        class="imagem1"
        src="https://rodrigot800.github.io/My_Portfolio/imagem/code.png"
        alt=""
      />
    );
  };

  const [descrição, setDescrição] = useState(imagemDescrição());

  const handleclickIcone = (descrição) => {
    setDescrição(descrição);
  };

  return (
    <article id="p3">
      <div id="apresentação3">
        <h2 className="aprh2">conhecimentos</h2>
        <div id="imgcode">
          {descrição}
          <h3>Clique nos Icones para mais Informções </h3>
        </div>
        <div class="alinhamento">
          <IconesDescrição
            imgIcone="https://github.com/Rodrigot800/My_Portfolio/blob/main/imagem/html.png?raw=true"
            descriçãoIcone="HTML"
            onClick={() => handleclickIcone("")}
          />
          <IconesDescrição
            imgIcone="https://github.com/Rodrigot800/My_Portfolio/blob/main/imagem/ccs3.png?raw=true"
            descriçãoIcone="CSS"
          />
          <IconesDescrição
            imgIcone="https://github.com/Rodrigot800/My_Portfolio/blob/main/imagem/javascript.png?raw=true"
            descriçãoIcone="JS"
          />
          <IconesDescrição
            imgIcone="https://github.com/Rodrigot800/My-Portifolio_2.0_React/blob/master/src/imagens/ReactLogo.png?raw=true"
            descriçãoIcone="React"
          />
          <IconesDescrição
            imgIcone="https://github.com/Rodrigot800/My-Portifolio_2.0_React/blob/master/src/imagens/ReactLogo.png?raw=true"
            descriçãoIcone="Git"
          />
          <IconesDescrição
            imgIcone="https://github.com/Rodrigot800/My_Portfolio/blob/main/imagem/github.png?raw=true"
            descriçãoIcone="GitHub"
          />
        </div>
      </div>
    </article>
  );
}

export default Apresentação3;
