import { createContext } from "react";
import { SetContextType } from "./ContextType";

export const StateContext = createContext <SetContextType | undefined>(undefined);