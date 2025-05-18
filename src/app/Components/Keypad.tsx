"use client";

import React, { useRef, useState } from 'react'
import { StateContext } from '@/Context/StateContext';
import { useContext } from 'react';
import KeypadButton from './ui/KeypadButton';

const Keypad = () => {

    const context = useContext(StateContext)
  
    if(!context){
        throw new Error ("StateContext.Provider is missing");
    }
  
    const {theme,setTheme} = context;
    const {expression,setExpression} = context;

    const handleDelete = () => {
    setExpression(prev => prev.slice(0, -1));
  };
  const handleReset = () => {
      setExpression([]);
    };
  const handleEqual = () => {
    const expressionString = expression.join('');
    setExpression([eval(expressionString)]);
  }


  return (
    <div className={`keypad ${theme===1?'bg-[hsl(223,31%,20%)]':(theme===2?'bg-[hsl(0,5%,81%)]':(theme===3?'bg-[hsl(268,71%,12%)]':''))}`}>
      <KeypadButton id='7'/>
      <KeypadButton id='8'/>
      <KeypadButton id='9'/>
      <button onClick={handleDelete} className={`delBtn ${theme==1?'bg-[hsl(225,21%,49%)] border-b-[hsl(224,28%,35%)]':(theme===2?'bg-[hsl(185,45%,49%)] border-b-[hsl(185,58%,25%)]':(theme===3?'bg-[hsl(281,89%,26%)] border-b-[hsl(285,91%,52%)]':''))}`}>DEL</button>
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
      <KeypadButton id='*'/>
      <button onClick={handleReset} className={`delBtn col-span-2 ${theme==1?'bg-[hsl(225,21%,49%)] border-b-[hsl(224,28%,35%)]':(theme===2?'bg-[hsl(185,45%,49%)] border-b-[hsl(185,58%,25%)]':(theme===3?'bg-[hsl(281,89%,26%)] border-b-[hsl(285,91%,52%)]':''))}`} >RESET</button>
      <button onClick={handleEqual} className={`equalBtn ${theme===1?'bg-[hsl(6,63%,50%)] border-b-[hsl(6,70%,34%)] text-white':(theme===2?'bg-[hsl(25,98%,40%)] border-b-[hsl(25,99%,27%)] text-white':(theme===3?'bg-[hsl(176,100%,44%)] border-b-[hsl(177,92%,70%)] text-[hsl(198,20%,13%)]':''))} `}>=</button>
    </div>
  )
}

export default Keypad
