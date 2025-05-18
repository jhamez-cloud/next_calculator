//import React, { useEffect, useRef } from 'react'
import { StateContext } from '@/Context/StateContext';
import { useContext } from 'react';

const Screen = () => {
    const context = useContext(StateContext)
  
    if(!context){
        throw new Error ("StateContext.Provider is missing");
    }
  
    //const {theme,setTheme} = context;
    const {expression,theme} = context;
    

  return (
    <div className={`screen ${theme===1?'bg-[hsl(224,36%,15%)]':(theme===2?'bg-[hsl(0,0%,93%)]':(theme===3?'bg-[hsl(268,71%,12%)]':''))}`}>
      <input type="text" value={expression.join('')} readOnly className={`screenInput ${theme===1?'text-white':(theme===2?'text-[hsl(60,10%,19%)]':(theme===3?'text-[hsl(52,100%,62%)]':''))}`}/>
    </div>
  )
}

export default Screen
