"use client";

import { StateContext } from '@/Context/StateContext';
import { error } from 'console';
import React, { useContext } from 'react'

const Heading = () => {

    const context = useContext(StateContext)

    if(!context){
        throw new Error ("StateContext.Provider is missing");
    }

    const {theme,setTheme} = context;

  return (
    <div className='w-full h-[30px] text-white flex justify-between mb-3'>
      <h1 className='font-[600]'>Calc</h1>

      <div className='flex justify-between items-center text-[9px] font-medium w-1/5'>
        <p>THEME</p>
        <div className='bg-[hsl(223,31%,20%)] h-[20px] p-1 rounded-full space-x-0.5'>
           <input type="radio" name='theme' className='focus:ring-amber-300 relative before:absolute before:content-["1"] before:-top-5 before:w-9/10 before:h-full before:text-center '/>
           <input type="radio" name='theme' className='relative before:absolute before:content-["2"] before:-top-5 before:w-9/10 before:h-full before:text-center '/>
           <input type="radio" name='theme' className='relative before:absolute before:content-["3"] before:-top-5 before:w-9/10 before:h-full before:text-center '/>
           
        </div>
      </div>
    </div>
  )
}

export default Heading
