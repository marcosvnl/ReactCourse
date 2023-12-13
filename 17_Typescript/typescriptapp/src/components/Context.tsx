import React from 'react'
import { AppContext } from '../App'

const Context = () => {
  
    const details = React.useContext(AppContext)
    return (
        <>
         {
            details && (
                <div>
                    <h3>Linguagem:  { details.language }</h3>
                    <p>Framework:  { details.framework }</p>
                    <p>Projetos:  { details.project }</p>
                </div>
            )
         } 
        </>
    )
}

export default Context