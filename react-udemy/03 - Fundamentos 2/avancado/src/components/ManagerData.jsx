import { useState}  from "react"

const ManageData = () =>{

    let initialNumber = 10

    let[number, setNumber] = useState(initialNumber)

 
  
    return(
        <div>   
            

            <p>Valor: {number}</p>
            <button onClick={()=> {
                setNumber(number += 1)
            }
            }>Aperte aqui para aumentar o  número</button>

            <button onClick={()=> {
                setNumber(initialNumber)
            }}>Clique para resetar a variavel</button>
        </div>
    )
}

export default ManageData
