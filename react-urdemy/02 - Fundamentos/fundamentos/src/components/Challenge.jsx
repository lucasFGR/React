const Challenge = () =>{
    
    const number1 = 10;
    const number2 = 20


   const IniciarSoma = () =>{
       
        return(

                console.log(number1 + number2)
           
        )
    
   }   



    return (
        <div>
            <div>
                <ol>
                    <li>Crie um componente chamado Challenge</li>
                    <li>Importe-o em App.js</li>
                    <li>No componente criado faça a criação de dois valores numéricos</li>
                    <li>Imprima esses valores no componente</li>
                    <li>Crie também um evento de clique que soma estes dois valores  exibe no console</li>
                </ol>
            </div>
            <button onClick={IniciarSoma}>Clique aqui para iniciar</button>
            <h2>Numero 1 = {number1}</h2>
            <h2>Numero 2 = {number2}</h2>
            
            
        </div>
    )
}

export default Challenge