import { useContext } from 'react';
import { StateContext } from '@/Context/StateContext';

interface radio {
    id:number;
}

import React from 'react'

const RadioButton = (props:radio) => {

    const context = useContext(StateContext)
    
    if(!context){
        throw new Error ("StateContext.Provider is missing");
    }
    
    const {theme,setTheme} = context;

    return (
    <>
        <input
            type="radio"
            id={`radio-${props.id}`}
            readOnly
            data-label={props.id}
            checked={theme === props.id}
            name="theme"
            className={`theme_1--radio-Btn 
                before:content-[attr(data-label)]
                ${props.id && theme === 1 ? 'before:text-white checked:after:bg-[hsl(6,63%,50%)]' : ''}
                ${props.id && theme === 2 ? 'before:text-[hsl(60,10%,19%)] checked:after:bg-[hsl(25,98%,40%)]' : ''}
            `}
            onClick={() => setTheme(props.id)}
        />

        {/* <label htmlFor={`radio-${props.id}`}></label> */}
    </>
    )
}

export default RadioButton
