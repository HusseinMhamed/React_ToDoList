import { createContext , useState } from "react";

export const AlertContext = createContext();

export function AlertProvider({ children }) {
    const [open, setOpen] =useState(false);
    const [message,setmessage]=useState("");
    
    return(
        <AlertContext.Provider value={{open, setOpen, message, setmessage}}>
            {children}
        </AlertContext.Provider>
    );
}