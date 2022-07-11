
//Styles and Css
import { useState } from 'react';
import './App.css';

// Componentes
import Logo2 from './assets/baixados.png'
import DestructWithProps from './components/DestructWithProps';
import ListRender from './components/ListRender';
import ManageData from './components/ManagerData';
import RenderIf from './components/RenderIf';
import ShowUserName from './components/ShowUserName'

function App() {


  const name = "Freitas"
  const mudarNome = () =>{
    setName2 ("React")
  }

  console.log(name)
  let [name2,setName2] = useState('Gonçalves')
  return (
    <div className="App">
      <h1>Avançando com React</h1>

      {/*IMAGEM EM PUBLIC */}
      <div>
          <img src="/logo192.png" alt="Logo do React" />
      </div>

      {/*IMAGEM EM ASSETS */}
      <div>
          <img src={Logo2} alt="" />
      </div>
      <div>
        <h3>useState na prática</h3>
        <ManageData/>
      </div>

      <div>
        <h3>Renderização de listas</h3>
        <ListRender />
      </div>

        <h3>Render IF</h3>
        <RenderIf/>

        <h3>Introdução a props</h3>
        
        <p><strong>Passando o nome do usuário via propriedade do objeto pai</strong></p>
        <ShowUserName name = "Lucas"/>

        <p><strong>Passando o nome do usuário via variável</strong></p>

        <ShowUserName name = {name}/>

        <p><strong>Passando o nome do usuario via useState</strong></p>

        <ShowUserName  name = {name2}/>
        <button onClick={mudarNome}>Clique para mudar o nome para React</button>

        <h3>Destructing with props</h3>
        <DestructWithProps name="Lucas" age={25} maiorDeIdade = {true}/>
        <DestructWithProps name="Rauana" age={23} maiorDeIdade = {false}/>
        
    </div>
  );
}

export default App;
