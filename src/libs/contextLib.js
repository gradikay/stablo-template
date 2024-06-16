import { useContext, createContext } from "react";

export const DataContext = createContext();

export function useDataContext(){
    return useContext(DataContext);
}