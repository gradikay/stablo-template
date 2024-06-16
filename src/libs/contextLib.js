import { useContext, createContext } from "react";

export const AppContext = createContext();

export function UseAppContext(){
    return useContext(AppContext);
}