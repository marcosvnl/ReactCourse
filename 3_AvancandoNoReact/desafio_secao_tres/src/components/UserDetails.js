import React from 'react'

const UserDetails = ({ id, name, age, profession }) => {
  return (
    <div>
        <ul>
            <li>Identificatory: { id }</li>
            <li>Name: { name }</li>
            <li>Age: { age }</li>
            <li>Profession: { profession }</li>
        </ul>
        {age >= 18 ? <p>Usuário pode tirar habilitação</p> : <p>Usuário NÃO pode tirar habilitação</p>}
    </div>
  )
}

export default UserDetails