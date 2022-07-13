const Events = () =>{

    const handleMyEvent = (e) =>{
        console.log(e)
    }

    const renderSomenthing = (x) =>{
        if(x){
            return <h1>Renderizando se x for verdadeiro</h1>
        }else{
            return <h1>Tambem posso renderizar se x for falso</h1>
        }
    }
    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={()=>{
                    console.log('Clicou')
                }}>Clique aqui tbm</button>

                <button onClick={()=>{
                    if(true){
                        console.log('Isso n deveria existir ^^')
                    }
                }}>clique aqui, por favor</button>
            </div>

            {renderSomenthing(true)}
            {renderSomenthing(false)}

        </div>
    )
}

export default Events