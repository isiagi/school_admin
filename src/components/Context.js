import React, {createContext, useState} from 'react'

export const AppContext = createContext()

export function Context(props) {
    const [view, setView] = useState()
    return (
        <AppContext.Provider value={[view, setView]}>
            {props.children}
        </AppContext.Provider>
    )
}


