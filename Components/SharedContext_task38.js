import {createContext, useState} from 'react';  


export const SharedContext = createContext({
    text: '',
    setText: () => {},
});

export function SharedContextProvider ({children}) {

    const [text, setText] = useState('');

    return (
        <SharedContext.Provider value={{text, setText}}>
            {children}
        </SharedContext.Provider>
    );
}