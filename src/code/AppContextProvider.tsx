
import { useLocalStorage } from '@uidotdev/usehooks';
import { createContext } from 'react';

export const appContext = createContext({} as ReturnType<typeof AppContextCode>['value']);

export function AppContextCode({ children }: { children: any }) {

    const [exampleData, setExampledata] = useLocalStorage('exampleData', {})

    const result = {
        exampleData,
        setExampledata
    }

    return {
        value: result,
        component: <appContext.Provider value={result}>{children}</appContext.Provider>
    }
}

export default function AppContextProvider({ children }: { children: any }) {
    const result = AppContextCode({ children }).value
    return <appContext.Provider value={result}>{children}</appContext.Provider>
}
