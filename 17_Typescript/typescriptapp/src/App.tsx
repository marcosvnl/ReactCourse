import React from 'react'
import FirstTsComponent from './components/FirstTsComponent'
import SecondComponent, { CodeLenguage } from './components/SecondComponent'
import Context from './components/Context'

const name: String = 'Marcos Vinicius'
const age: Number = 38
const isWorking: Boolean = true

interface IAppContext {
  language: string,
  framework: string | null
  project: number
}

export const AppContext = React.createContext<IAppContext | null>(null)

function App() {

  const userGreeeting = (name: String): String => {
    return `Olá, ${ name }`
  }

  const contextValue: IAppContext = {
    language: 'Javascript',
    framework: 'Express',
    project: 5 
  }

  return (
    <AppContext.Provider value={ contextValue } >
      <div className="App">
        <h1>Typescript com React</h1>
        <p><strong>Name: </strong>{ name }</p>
        <p><strong>Age:  </strong>{ age.toString() }</p>
        {
          isWorking && <p>{ userGreeeting(name) } is working.</p>
        }
        <FirstTsComponent />
        <SecondComponent name = 'Marcos' age = { 1 } worked = { true } taks={['Dev', 'Data', 'Deploy']}/>
        {
          <ul>
            <li>{CodeLenguage.TS}</li>
            <li>{CodeLenguage.CS}</li>
            <li>{CodeLenguage.TSQL}</li>
          </ul>
        }
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
