import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(['lista 1', 'lista 2', 'lista 3'])

    const [users, setUsers] = useState(
        [
            { id: 1, name: 'Marcos',  age: 37 },
            { id: 2, name: 'João',    age: 20 },
            { id: 3, name: 'Pedro',   age: 65 },
            { id: 4, name: 'Astolfo', age: 81 }
        ]
    )

    const deleteRandon = () =>{
        const randomNumber = Math.floor(Math.random() * 5)
        setUsers((prevUsers) => {
            return prevUsers.filter(user => randomNumber !== user.id)
        })
    }
    console.log(users)
  
    return (
        <div>
            <ul>
                {list.map((l, i) => (
                    <li key={i}>{i}: { l }</li>
                ))}
            </ul>
            <br />
            <ul>
                {users.map((user) => (
                    <li key={user.id}>Nome: { user.name } Idade: { user.age }</li>
                ))}
            </ul>
            <button onClick={deleteRandon}>Deletarusuar aleatoriamente</button>
        </div>
    )
}

export default ListRender