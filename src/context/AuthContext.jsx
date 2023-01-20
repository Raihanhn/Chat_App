import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../firebase"
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            console.log(user)
        });
    }, []);

    <AuthContext.Provider value={{currentUser}} >
        {children}
    </AuthContext.Provider>
};