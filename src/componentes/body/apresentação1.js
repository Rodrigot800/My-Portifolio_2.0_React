import React from "react";

function Apresentação1(props) {
  return (
    <article id="p1">
      <div id="apresentação1">
        <div className="ali">
          <div id="apresentação_perfil">
            <img id="imagemPerfil" src={props.srci1} alt="minha foto" />
          </div>
          <div id="apresentação_perfil2">
            <h2>Rodrigo Peixoto</h2>
          </div>
        </div>
        <h3 id="saudacao">olá!</h3>
        Sou desenvolvedor web e estudante de Engenharia de software.
        <div>
          <img
            className="imagem1"
            src={props.srci2}
            alt="imagem de programador"
          />
        </div>
        <button className="button">
          <a href="">
            <h3>Currículo</h3>
          </a>
        </button>
        <button className="button">
          <a href="#p4">
            <h3>ver Projetos</h3>
          </a>
        </button>
      </div>
    </article>
  );
}

export default Apresentação1;
