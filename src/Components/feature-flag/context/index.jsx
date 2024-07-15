import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";

export const FeatureFlagsContext = createContext(null)

export default function FeatureFlagsProvider ({ children }) {
    const [loading, setLoading] = useState(false)
    const [enabledFlags, setEnablesFlags] = useState({})

    async function fetchFeatureFlags() {
        try {
            setLoading(true)
            const response = await featureFlagsDataServiceCall()
            setEnablesFlags(response)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            throw new Error(error)
        }
    }

    useEffect(() => {
        fetchFeatureFlags()
    }, [])

    return (
        <FeatureFlagsContext.Provider value={{loading, enabledFlags}}>
            {children}
        </FeatureFlagsContext.Provider>
    )
}