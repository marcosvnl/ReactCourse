import React  from 'react'
import HookUseState from '../components/HookUseState'
import HookUseReducer from '../components/HookUseReducer'
import HookUseEffect from '../components/HookUseEffect'
import HookUseRef from '../components/HookUseRef'
import HookUseCallback from '../components/HookUseCallback'

//Context
import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'

const Home = () => {
  const { contextValue } = useContext(SomeContext)

  return (
    <div>
        <HookUseState />
        <HookUseReducer />
        <HookUseEffect />
        <h2>UseContext</h2>
        <p>Valor do context: { contextValue }</p>
        <hr />
        <HookUseRef />
        <HookUseCallback />
    </div>
  )
}

export default Home