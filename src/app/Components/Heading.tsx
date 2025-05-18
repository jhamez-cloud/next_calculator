"use client";

import { StateContext } from '@/Context/StateContext';
import React, { useContext } from 'react'
import RadioButton from './ui/RadioButton';

const Heading = () => {

    const context = useContext(StateContext)

    if(!context){
        throw new Error ("StateContext.Provider is missing");
    }

    const {theme,setTheme} = context;
/* 
    if(theme === 1){
      console.log('1')
    }else if (theme === 2){
      console.log('2');
    }else{console.log('3')} */

  return (
    <div className={`heading ${theme===1?'text-white':(theme===2?'text-[hsl(60,10%,19%)]':(theme===3?'text-[hsl(52,100%,62%)]':''))}`}>
      <h1 className='font-[600]'>Calc</h1>

      <div className='flex justify-between items-center text-[9px] font-medium w-1/4'>
        <p>THEME</p>
        <div className={`radioBackground ${theme===1?'bg-[hsl(223,31%,20%)]':(theme===2?'bg-[hsl(0,5%,81%)]':(theme===3?'bg-[hsl(268,71%,12%)]':''))}`}>
           <RadioButton id={1}/>
           <RadioButton id={2}/>
           <RadioButton id={3}/>
        </div>
      </div>
    </div>
  )
}

export default Heading
