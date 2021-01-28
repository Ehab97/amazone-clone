//set up data layer
//we need this to track pasket

import React, { createContext,useReducer,useContext } from "react";

//this is the data layout
export const StateContext =createContext();


//build a proivder

export const StateProvider=({reducer,initailState,children})=>(
     <StateContext.Provider value={useReducer(reducer,initailState)}>
          {children}
     </StateContext.Provider>
)

//this how we use inside of a compeonent
export const useStateValue=()=>useContext(StateContext);