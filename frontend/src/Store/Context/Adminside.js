import { createContext, useState } from "react";

export const ModalContext = createContext("");

export default function Context({children}){
    const [showModal,setShowModal] = useState(false);
    const [serviceProvider,setServiceProvider] = useState("");
    const [ServiceProviders,setServiceProviders] = useState([]);
    return(
      <ModalContext.Provider value={{showModal,setShowModal,serviceProvider,setServiceProvider,ServiceProviders,setServiceProviders}}>
        {children}
      </ModalContext.Provider>
    )
}