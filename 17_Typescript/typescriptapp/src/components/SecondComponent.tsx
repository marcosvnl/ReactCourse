import React from 'react'

type Persona = {
      name: string | null
    , age: number
    , worked: boolean
    , taks: string[]
}

export type Companie = {
    name: string,
    branch: string | null,
    activity: string | null
}

export enum CodeLenguage {
    TS = 'TypeScript',
    CS = 'CSharp',
    TSQL = 'T-SQL'
}


const SecondComponent = (props: Persona) => {
  
    return (
        <div>
            <h4>Olá <strong>{ props.name }</strong></h4>
            <p>Idade: <strong>{ props.age }</strong></p>
            <p>Trabalhando: { props.worked === true ? 'Sim' : 'Não' }</p>
            { 
                props.worked && props.taks.map((task) => (
                    <p>{task}</p>
                ))
            }
        </div>
  )
}

export default SecondComponent