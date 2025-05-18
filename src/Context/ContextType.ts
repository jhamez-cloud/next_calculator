import React from "react";

export interface SetContextType{
    theme:number;
    setTheme:React.Dispatch<React.SetStateAction<number>>;
    expression:string[];
    setExpression:React.Dispatch<React.SetStateAction<string[]>>;
}