import React from "react";
import codePng from "../../imagens/code.png";
import Projeto from "./comp.projetos/projetos";

function ApresentaçãoProjetos(props) {
  return (
    <article id="p4">
      <div id="apresentação4">
        <h2 class="aprh2">Projetos</h2>
        <div class="alinhamento-1">
          <Projeto
            urlProj=""
            img=""
            descriçãoProj="Em Construção ..."
            descrição=""
          />
          <Projeto
            urlProj="https://rodrigot800.github.io/Calculadora/"
            img="https://github.com/Rodrigot800/My_Portfolio/blob/main/imagem/calc.png?raw=true"
            descriçãoProj="calculadora"
            descrição="construida com html, css e javascript"
          />
          <Projeto
            urlProj="https://rodrigot800.github.io/jogo_da_memoria/"
            img="https://github.com/Rodrigot800/My_Portfolio/blob/main/imagem/jogodamemoria.png?raw=true"
            descriçãoProj="jogo da memória"
            descrição="construida com html, css e javascript"
          />
          <Projeto
            urlProj="https://rodrigot800.github.io/Jogo_da_Velha/"
            img="https://github.com/Rodrigot800/My_Portfolio/blob/main/imagem/jogodavelha.png?raw=true"
            descriçãoProj="Jogo da velha"
            descrição="construida com html, css e javascript"
          />
        </div>
        <div id="conteineimg">
          <img id="imagem2" src={codePng} alt="" />
        </div>
      </div>
    </article>
  );
}

export default ApresentaçãoProjetos;
