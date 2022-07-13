function ChangeMessageState({handleMessage}) {
  return (
    <div>
        <button onClick={()=>{
        handleMessage('Teste')
    }}>Mudar</button>
    </div>
  )
}

export default ChangeMessageState