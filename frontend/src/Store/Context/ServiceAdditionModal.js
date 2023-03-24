import { createContext, useState } from "react";

export const ServiceModalContext = createContext("");

export default function Context({children}){
    const [showServiceModal,setShowServiceModal] = useState(false);
    return(
      <ServiceModalContext.Provider value={{showServiceModal,setShowServiceModal}}>
        {children}
      </ServiceModalContext.Provider>
    )
}