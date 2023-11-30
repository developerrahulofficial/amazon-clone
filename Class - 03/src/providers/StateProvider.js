import React, { createContext, useContext, useReducer } from "react"

// Prepare a datalayer
export const StateContext = createContext();

// wrap the app and provider with Data Layer 

export const StateProvider = ({ reducer, initialState, children })  => (
    
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>

);

export const useStateValue = () =>useContext(StateContext);


