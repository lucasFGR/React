import { useState } from "react"

const RenderIf = () => {

    const [x] = useState(false)
    const [usuarioLogado,setUsuarioLogado] = useState(true)
    return (
        <div>
            <h3>Isso será impresso ?</h3>
            {x && <p>Se x for verdadeiro, sim!</p>}
            {!x && <p>Se x for falso, sim!</p>}

            <h3>If ternário</h3>
            {
                usuarioLogado ? (
                    <div>
                        <p>Usuário logado</p>
                    </div>
                ) : (
                    <div>
                        <p>Usuário deslogado</p>
                    </div>
                )
            }
            <button  onClick={() =>{
                setUsuarioLogado (false)
            }}>Deslogar do sistema</button>
            <br/>
            <button  onClick={() =>{
                setUsuarioLogado (true)
            }}>Logar no sistema</button>

        </div>
    )
}

export default RenderIf