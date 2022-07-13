
function ChildrenReact({children,nomeCompenent}) {
  return (
    <>
        <h2>Este é o titulo do container</h2>
        <h4>Esté o nome do compoenent: {nomeCompenent}</h4>
        {children}
    </>
  )
}

export default ChildrenReact