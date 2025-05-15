import React from 'react'
import { StateContext } from '@/Context/StateContext';
import { useContext } from 'react';

const Screen = () => {
    const context = useContext(StateContext)
  
    if(!context){
        throw new Error ("StateContext.Provider is missing");
    }
  
    const {theme,setTheme} = context;

  return (
    <div className={`screen ${theme===1?'bg-[hsl(224,36%,15%)]':(theme===2?'bg-[hsl(0,0%,93%)]':'')}`}>
      <input type="text" className='w-full h-full text-white text-3xl font-bold text-right focus:outline-none '/>
    </div>
  )
}

export default Screen
