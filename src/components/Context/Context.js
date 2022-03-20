import React, { useReducer, CreateContext, createContext } from "react";

const initialState = [];

export const ExpenseTrackercontext = createContext(initialState);

export const Provider = ({children}) => {

    return (
        <ExpenseTrackercontext.Provider value={{appName: 'Expense Tracker'}}>
            {children}
        </ExpenseTrackercontext.Provider>
    )
}