import { useEffect, useState } from 'react';

import logoAscii from './assets/logoascii.png';
import perfilimg from './assets/perfilimg.jpeg';
import agenda from './assets/agenda.png';
import heart from './assets/heart.svg';

import Content, { EDUCATION, SKILLS, SOFT_SKILLS } from './components/Content';

import './App.css';

function App() {
  const [title, setTitle] = useState(EDUCATION);

  useEffect(() => {
    setTitle(EDUCATION);
  }, [])

  return (
    <div className="App">
      <header className="top-menu-bar">
        <div className="logocontainer">
          <img src={logoAscii} alt="logo da ascii" className="logoAscii" />
        </div>
        <a href="/#sobre">Sobre você</a>
        <a href="/#conhecimentos">Conhecimentos</a>
        <a href="#contato">Contato</a>
      </header>

      <div id="sobre" className="main-container">
        <h2 className="sobre">Sobre você</h2>
        <div className="info-container">
          <img src={perfilimg} alt="" className="perfil-img" />
          <p className="selfdescription">
            Guilherme Rodrigues Rodovalho, 18, maranhense, aluno do 3° período de 
            Sistemas de informação na UFU. Gosto bastante de música, jogos e programação.
          </p>
        </div>

        <div id="conhecimentos" className="container-conhecimentos">
          <h3 className="conhecimentos">Conhecimentos</h3>
          <div className="container-opcoes">
            <div className="organiza-opcoes">
              <button className="bloco-opcao" onClick={() => setTitle(EDUCATION)}>
                <p href="/#" className="opcao">Educação</p>
              </button>

              <button className="bloco-opcao"
                onClick={() => setTitle(SKILLS)}>
                <p href="/#" className="opcao">Habilidades</p>
              </button>
              <button className="bloco-opcao" onClick={() => setTitle(SOFT_SKILLS)}>
                <p href="/#" className="opcao">Soft Skills</p>
              </button>
            </div>

            <div className="opcoes-text">
              <Content title={title} />
            </div>

          </div>
        </div>

        <div id="contato" className="container-contato">
          <h2 className="contato-text">Contato</h2>
          <div className="info-contato">
            <img src={agenda} alt="imagem de agenda" className="agenda" />
            <p className="contatos">
              Email: guirodovalho10@gmail.com
              <br />
              Telefone: xxxx-xxxx
              <br />
              GitHub: <a href="https://github.com/GuilhermRodovalho" target="blank" rel="noreferrer">GuilhermRodovalho</a>
              <br />
              ...
            </p>

          </div>
        </div>

      </div>


      <footer>
        <p>Desenvolvido com </p>
        <img src={heart} alt="coração" className="coracao" />
        <p> por Guilherme Rodovalho</p>
      </footer>
    </div>
  );
}

export default App;
