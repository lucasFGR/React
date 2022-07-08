const TemplateExpressions = () =>{

    const name = "Lucas"
    const data = {
        age:25,
        job:"Programmer"
    }
    return (
        <div>
        <p>Olá {name}, tudo bem ?</p>
        <p>Você atua como {data.job}</p>
        </div>
    )
}


export default TemplateExpressions