import { useContext } from 'react'
import { StateContext } from '@/Context/StateContext';

interface keypadButton {
    id:string;
}

import React from 'react'

const KeypadButton = (props:keypadButton) => {

    const context = useContext(StateContext)

    if(!context){
        throw new Error ("StateContext.Provider is missing");
    }

    const {theme,setTheme} = context;

  return (
    <button className={`theme_1--key ${theme===1?'bg-[hsl(221,14%,31%)]':(theme===2?'bg-[hsl(45,7%,89%)]':'')}`}>{props.id}</button>
  )
}

export default KeypadButton
