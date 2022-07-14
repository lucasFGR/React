import { useState } from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title"
import ChallengeCss from "./components/ChallengeCss";

function App() {


  const [n, setN] = useState(0);
  const [redTitle,setRedTitle] = useState(true)

  function incrementN() {
    console.log(n);
    return setN(n + 1);
  }

  function resetN(){
    setN(0)
  }

  function changeClass(){
    return setRedTitle(false)
  }

  function changeClassForTrue(){
    return setRedTitle(true)
  }


  const carros = [
    {
      id: 1,
      modelo: "Ford ka",
      fabricante: 'Ford',
      novo: true
    },
    {
      id:2,
      modelo: "Hyunday HB20",
      fabricante : "Hyunday",
      novo : false
    },
    {
      id:3,
      modelo: "Fiat argo",
      fabricante: "Fiat",
      novo: true
    }
  ]


  return (
    <div className="App">
      <h1>React com CSS</h1>
      <MyComponent />
      <p>ESte paragrafo é do App.js</p>

      {/* INLINE CSS */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizado de forma inline
      </p>

      <p
        style={{
          color: "magenta",
          padding: "25px",
          borderTop: "2px solid red",
        }}
      >
        Este elemento foi estilizado de forma inline
      </p>

      {/* CSS Dinâmico*/}
      <h2 style={n < 10 ? { color: "purple", backgroundColor: "green" } : { color: "black" }}>
        Css dinâmico
      </h2>
      <button onClick={incrementN}>Clique para alterar o valor de N</button>
      <button onClick={resetN}>Clique para alterar o valor de N</button>

    {/*Classe dinamica */}
    <h2 className={redTitle ? "red-title" : "title"} >Este titulo vai ter classe dinamica</h2>
    <button  onClick={changeClass}>Clique para mudar a classe do titulo</button>
    <button onClick={changeClassForTrue}>Clique para mudar a classe do titulo</button>

    {/* CSS Modules*/}
      
    <Title />

    <h2 className="my_title">Titulo no app.js</h2>

    <h3>Desafio da sessão</h3>

    {carros.map((carro) =>(<ChallengeCss key={carro.id} 
                              modelo={carro.modelo} 
                              fabricante={carro.fabricante} 
                              novo={carro.novo} 
                />
 ))}

    </div>

  
  );
}

export default App;
