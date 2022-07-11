
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
import ReacFragment from './components/ReactFragment'
import ChildrenReact from './components/ChildrenReact';
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails'


function App() {


  const pessoas = [
    {id:1,name:"Lucas",age:25,profissao:"Dev React"},
    {id:2,name:"Rau",age:23,profissao:"Professora"},
    {id:3,name:"Skye",age:2,profissao:"Cachorra"}

  ]

  const users = [
    {id:1,name:"Teste 1",age:24,maiorDeIdade:true},
    {id:2,name:"Teste 2",age:15,maiorDeIdade:false},
    {id:3,name:"Teste 3",age:13,maiorDeIdade:false},
    {id:4,name:"Teste 4",age:3,maiorDeIdade:false}
  ]

  const [message, setMessage] = useState("")


  const handleMessag = (msg) =>{
    setMessage(msg)
  }




  const name = "Freitas"
  const mudarNome = () =>{
    setName2 ("React")
  }


  let funcaoDoPai = function (){
    console.log('Olá')
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
        
        <h1>Looping in array objects</h1>
        {users.map((user)=>(
          <DestructWithProps key={user.id} name= {user.name} age = {user.age} maiorDeIdade = {user.maiorDeIdade}/>
        ))}

        <h1>React Fragments</h1>
        <ReacFragment nameInstrument={"Cello"}/>

        <ChildrenReact nomeCompenent = "Lucas">
          <p>Esté o conteudo quw está no elemento pai</p>
        </ChildrenReact>

        <h3>Função como props</h3>
        <ExecuteFunction myFunction = {funcaoDoPai}/>

        <h3>Stat Lift</h3>
        <Message msg={message} />
        <ChangeMessageState handleMessage = {handleMessag}/>


        <h1>Desafio da sessão</h1>
        <p>1- Crie um array de objetos compostos de pessoa, com as propriedade de:</p>
        <p>nome,idade e profissão(array com pelo menos 3 itens)</p>
        <p>2- Os dados devem ser exibidos em um component UserDetais, que você deve criar, <br/>
        as informações devem ser exibidas</p>
        <p>3- Faça a renderização condicional que exibe se o usuário pode tirar carteira de habilitação ou não, imprimir isso no componente</p>
        <p>4- A inforamção pode ser exibida num parágrafo( checar se idade {">="} 18)</p>
        
        <h2>Resultado do desafio</h2>
        {
          pessoas.map((pessoa) =>(
           <UserDetails key={pessoa.id} name={pessoa.name} age={pessoa.age} profissao={pessoa.profissao} />
          ))
        }
    </div>
  );
}

export default App;
