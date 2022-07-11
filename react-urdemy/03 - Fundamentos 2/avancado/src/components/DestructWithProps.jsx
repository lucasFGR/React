import { useState } from "react"

const DestructWithProps = ({name,age,maiorDeIdade} = useState) =>{
    return (
        <div>
            <h4>Dados do usuário</h4>
            <ul>
                <li>Nome: {name}</li>
                <li>Idade: {age}</li>
            </ul>

            {maiorDeIdade ? (
                <p>Usuário maior de idade</p>
            ) : (
                <p>Usuário menor de idade</p>

            )}
        </div>
    )
}

export default DestructWithProps