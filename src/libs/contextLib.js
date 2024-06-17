import { useContext, createContext } from "react";

// Create a new context object to hold the global app state
export const AppContext = createContext();

// Custom hook to conveniently access the app context
export function useAppContext() {
    return useContext(AppContext); // Use the useContext hook to access the AppContext
}
