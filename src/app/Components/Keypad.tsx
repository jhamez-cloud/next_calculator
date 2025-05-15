"use client";

import React, { useRef, useState } from 'react'

const Keypad = () => {

    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const [expression,setExpression] = useState([])

  return (
    <div className='w-full h-8/10 bg-[hsl(223,31%,20%)] rounded-md grid grid-cols-4 grid-rows-5 p-6 gap-6'>
      <button className='theme_1--key' ref={buttonRef}>7</button>
      <button className='theme_1--key'>8</button>
      <button className='theme_1--key'>9</button>
      <button className='bg-[hsl(225,21%,49%)] text-white rounded-md font-bold'>DEL</button>
      <button className='theme_1--key'>4</button>
      <button className='theme_1--key'>5</button>
      <button className='theme_1--key'>6</button>
      <button className='theme_1--key'>+</button>
      <button className='theme_1--key'>1</button>
      <button className='theme_1--key'>2</button>
      <button className='theme_1--key'>3</button>
      <button className='theme_1--key'>-</button>
      <button className='theme_1--key'>.</button>
      <button className='theme_1--key'>0</button>
      <button className='theme_1--key'>/</button>
      <button className='theme_1--key'>X</button>
      <button className='col-span-2 bg-[hsl(225,21%,49%)] text-white rounded-md font-bold'>RESET</button>
      <button className='col-span-2 bg-[hsl(6,63%,50%)] text-white rounded-md font-bold text-xl'>=</button>
    </div>
  )
}

export default Keypad
