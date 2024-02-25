import React from "react";
import IconesDescrição from "../body/ícones_descrição/ícones";

function Apresentação3() {
  return (
    <article id="p3">
      <div id="apresentação3">
        <h2 className="aprh2">conhecimentos</h2>
        <div id="imgcode">
          <img class="imagem1" src="https://rodrigot800.github.io/My_Portfolio/imagem/code.png" alt="" />
          <h3>Clique nos Icones para mais Informções </h3>
        </div>
        <div id="text1" class="text_conhecimentos">
          <h2>HTML5</h2>

          <p>
            HTML é uma linguagem de marcação utilizada para estruturar e
            organizar o conteúdo de páginas da web. Através de elementos ou
            tags, é possível criar cabeçalhos, parágrafos, links e imagens.
            Junto com CSS para estilização e JavaScript para interatividade, o
            HTML desempenha um papel essencial na construção e visualização de
            websites.
          </p>
        </div>
        <div id="text2" class="text_conhecimentos">
          <h2>CSS3</h2>
          <p>
            CSS (Cascading Style Sheets) é uma linguagem de estilo utilizada
            para definir a aparência e o layout das páginas da web. Com o CSS, é
            possível aplicar cores, fontes, tamanhos, espaçamentos e efeitos
            visuais aos elementos HTML. Através de seletores, propriedades e
            valores, é possível estilizar elementos individualmente ou em grupo,
            criar layouts responsivos e garantir uma experiência visual
            consistente em diferentes dispositivos. O CSS é complementar ao HTML
            e permite separar a apresentação do conteúdo, facilitando a
            manutenção e a criação de páginas web atraentes e bem organizadas.
          </p>
        </div>
        <div id="text3" class="text_conhecimentos">
          <h2>JavaScript</h2>
          <p>
            JavaScript é uma linguagem de programação de alto nível, amplamente
            usada para criar interatividade em páginas da web. Com sintaxe
            simples e flexível, ele permite manipular elementos HTML, realizar
            cálculos, interagir com o usuário e fazer requisições a servidores.
            Além disso, o JavaScript é executado no lado do cliente, no
            navegador, o que o torna rápido e responsivo. Com seu uso, é
            possível criar aplicativos web dinâmicos e funcionais, além de ser
            amplamente utilizado em frameworks como React e Angular para o
            desenvolvimento de aplicações complexas.
          </p>
        </div>
        <div id="text5" class="text_conhecimentos">
          <h2>GitHub</h2>
          <p>
            GitHub é uma plataforma web que permite hospedar, compartilhar e
            colaborar em projetos de desenvolvimento de software. É amplamente
            utilizado para controle de versão e gerenciamento de código-fonte,
            utilizando o sistema de controle de versão Git. Por meio do GitHub,
            os desenvolvedores podem criar repositórios públicos ou privados,
            realizar solicitações de pull, revisar e colaborar em código, além
            de gerenciar problemas e tarefas relacionadas ao desenvolvimento. É
            uma ferramenta essencial para o trabalho colaborativo e um hub
            central para a comunidade de desenvolvedores, facilitando o
            compartilhamento e a descoberta de projetos de código aberto.
          </p>
        </div>
        <div id="text4" class="text_conhecimentos">
          <h2>Git</h2>
          <p>
            Git é um sistema de controle de versão distribuído amplamente
            utilizado no desenvolvimento de software. Ele permite rastrear e
            gerenciar alterações em arquivos e diretórios ao longo do tempo. Com
            o Git, é possível criar ramificações (branches) para desenvolver
            recursos separadamente e, em seguida, mesclá-los ao ramo principal.
            Ele também fornece recursos para sincronizar o código entre
            diferentes repositórios, facilitando a colaboração entre
            desenvolvedores. Além disso, o Git registra um histórico completo de
            todas as alterações feitas, permitindo a recuperação de versões
            anteriores do código.
          </p>
        </div>
        <div id="text6" class="text_conhecimentos">
          <h2>PHP</h2>
          <p>
            PHP é uma linguagem de programação amplamente usada para
            desenvolvimento web. Ela é executada no lado do servidor e é capaz
            de gerar conteúdo dinâmico e interagir com bancos de dados. Com uma
            sintaxe semelhante ao HTML e C, o PHP permite a criação de sites
            dinâmicos, aplicativos web e sistemas complexos. Possui uma vasta
            comunidade de desenvolvedores e uma extensa biblioteca de funções,
            facilitando o desenvolvimento rápido e eficiente. Além disso, o PHP
            pode ser facilmente integrado com HTML e CSS, tornando-o uma opção
            popular para o desenvolvimento de sites dinâmicos e aplicativos web.
          </p>
        </div>
        <div class="alinhamento">
          <IconesDescrição imgIcone="https://github.com/Rodrigot800/My_Portfolio/blob/main/imagem/html.png?raw=true" 
          descriçãoIcone="HTML"
          />
          <IconesDescrição imgIcone="https://github.com/Rodrigot800/My_Portfolio/blob/main/imagem/ccs3.png?raw=true" 
          descriçãoIcone="CSS"
          />
          <IconesDescrição imgIcone="https://github.com/Rodrigot800/My_Portfolio/blob/main/imagem/javascript.png?raw=true" 
          descriçãoIcone="JS"
          />
          <IconesDescrição imgIcone="https://github.com/Rodrigot800/My_Portfolio/blob/main/imagem/git.png?raw=true" 
          descriçãoIcone="Git"
          />
          <IconesDescrição imgIcone="https://github.com/Rodrigot800/My_Portfolio/blob/main/imagem/github.png?raw=true" 
          descriçãoIcone="GitHub"
          />
          <IconesDescrição imgIcone="" 
          descriçãoIcone="React"
          />
         
          
        </div>
      </div>
      <div></div>
    </article>
  );
}

export default Apresentação3;
