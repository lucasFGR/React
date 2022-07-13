import { useState } from "react"

const ListRender = () =>{

    const [list] = useState(['Lucas','Sky','Rauana','Buga'])


    const [users,setUsers] = useState(
        [
            {
                id :1,
                nome: "Lucas",
                age: 24  
            },
            {
                id: 2,
                nome: "Sky",
                age: 2
            },
            {
                id: 3,
                nome: "Rau",
                age:23
            }
        ]
    )

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers)=>{
            console.log(prevUsers)
            return prevUsers.filter((user)=> randomNumber !== user.id)
        })
    }
    return(
        <div>
            <ul>
                {list.map((item,i) => (
                    <li key={i}>{item}</li>
                )) }
            </ul>

            <ul>
                {users.map((user) => (
                    <li key={user.id}> Nome: {user.nome} <br /> Idade: {user.age}</li>
                ))}
            </ul>

            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    )
}

export default ListRender   