"use client";

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
  const {expression,setExpression} = context;

  const handleClick = () => {
   /*  const value = (event.target as HTMLButtonElement).textContent ?? '';
    setExpression((prev) => [...prev, value]); */

    setExpression(prev=>[...prev,props.id]);
    console.log(expression)
  }

  return (
    <button onClick={handleClick} className={`theme_1--key ${theme===1?'bg-[hsl(30,25%,89%)] border-b-[hsl(28,16%,65%)] text-[hsl(221,14%,31%)] hover:bg-white':(theme===2?'bg-[hsl(45,7%,89%)] border-b-[hsl(35,11%,61%)] text-[hsl(60,10%,19%)] hover:bg-white':(theme===3?'bg-[hsl(268,47%,21%)] border-b-[hsl(290,70%,36%)] text-[hsl(52,100%,62%)] hover:bg-[hsl(255,44%,20%)]':''))}`}>{props.id}</button>
  )
}

export default KeypadButton
