"use client";

import { useState } from "react";
import Heading from "./Components/Heading";
import Keypad from "./Components/Keypad";
import Screen from "./Components/Screen";

import { StateContext } from "@/Context/StateContext";

export default function Home() {

  const [theme,setTheme] = useState<number>(1);
  const [expression,setExpression] = useState<string[]>([]);

  return (
    <div className={`body ${theme===1?'bg-[hsl(222,26%,31%)]':(theme===2?'bg-[hsl(0,0%,90%)]':(theme===3?'bg-[hsl(268,75%,9%)]':''))}`}>
      <div className="w-2/7 h-2/3 max-lg:w-9/10">
        <StateContext.Provider value={{theme,setTheme,expression,setExpression}}>
          <Heading/>
          <Screen/>
          <Keypad/>
        </StateContext.Provider>
      </div>
    </div>
  );
}
