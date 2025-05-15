"use client";

import { useState } from "react";
import Heading from "./Components/Heading";
import Keypad from "./Components/Keypad";
import Screen from "./Components/Screen";

import { StateContext } from "@/Context/StateContext";

export default function Home() {

  const [theme,setTheme] = useState<number>(1);
  /* const [expression,setExpression] = useState<string>('') */

  return (
    <>
      <div className="w-2/7 h-2/3">
        <StateContext.Provider value={{theme,setTheme}}>
          <Heading/>
          <Screen/>
          <Keypad/>
        </StateContext.Provider>
      </div>
    </>
  );
}
