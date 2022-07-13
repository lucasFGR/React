const UserDetails = ({name,age,profissao}) =>{
    return(
        <>
        <ul>
            <li>Nome: {name}</li>
            <li>Idade: {age}</li>
            <li>Profissão: {profissao}</li>
        </ul>

        {age >= 18 ?(
            <p><strong>Já pode tirar habilitação</strong></p>
        ): (
            <p><strong>Não pode tirar habilitação</strong></p>
        )}
        </>
    )
}

export default UserDetails