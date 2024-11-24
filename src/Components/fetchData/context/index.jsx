import { createContext, useState } from "react";

export const FetchDataContext = createContext(null)

export default function FetchDataProvider({children}) {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(false)

    return (
        <FetchDataContext.Provider value={{item, setItem, loading, setLoading}}>
            {children}
        </FetchDataContext.Provider>
    )
}