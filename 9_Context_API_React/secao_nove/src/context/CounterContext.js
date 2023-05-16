import { createContext, useState } from "react";

//contect
export const CounterContext = createContext()

//provider
export const CounterContextProvider = ({ children }) => {
    const [counter, setCounter] = useState(0)

    return(
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    )
    // será chamado no intex.js para poder abraçar todo porjeto.
}