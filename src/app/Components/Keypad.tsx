"use client";

import React, { useRef, useState } from 'react'
import { StateContext } from '@/Context/StateContext';
import { useContext } from 'react';
import KeypadButton from './ui/KeypadButton';

const Keypad = () => {

    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const [expression,setExpression] = useState([])

    const context = useContext(StateContext)
  
    if(!context){
        throw new Error ("StateContext.Provider is missing");
    }
  
    const {theme,setTheme} = context;

  return (
    <div className={`keypad ${theme===1?'bg-[hsl(223,31%,20%)]':(theme===2?'bg-[hsl(0,5%,81%)]':'')}`}>
      <KeypadButton id='7'/>
      <KeypadButton id='8'/>
      <KeypadButton id='9'/>
      <button className={`delBtn ${theme==1?'bg-[hsl(225,21%,49%)]':(theme===2?'bg-[hsl(185,45%,49%)]':'')}`}>DEL</button>
      <KeypadButton id='4'/>
      <KeypadButton id='5'/>
      <KeypadButton id='6'/>
      <KeypadButton id='+'/>
      <KeypadButton id='1'/>
      <KeypadButton id='2'/>
      <KeypadButton id='3'/>
      <KeypadButton id='-'/>
      <KeypadButton id='.'/>
      <KeypadButton id='0'/>
      <KeypadButton id='/'/>
      <KeypadButton id='x'/>
      <button className={`delBtn col-span-2 ${theme==1?'bg-[hsl(225,21%,49%)]':(theme===2?'bg-[hsl(185,45%,49%)]':'')}`}>RESET</button>
      <button className={`equalBtn ${theme===1?'bg-[hsl(6,63%,50%)]':(theme===2?'bg-[hsl(25,98%,40%)]':'')} `}>=</button>
    </div>
  )
}

export default Keypad
