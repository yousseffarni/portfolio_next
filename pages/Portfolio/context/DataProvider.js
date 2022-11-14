import React,{useState,createContext} from 'react';


const DataContext = createContext({});

export const DataProvider = ({ children }) =>{

    // Mail Form States :
    const [MailFormOpen, setMailFormOpen] = useState(false);
    const [MailFormMinimize, setMailFormMinimize] = useState(false);

    // Settings Form State :
    const [SettingsFormOpen, setSettingsFormOpen] = useState(false);

    // Night Mode State :
    const [NighModActive, setNighModActive] = useState(false);
    
    
    // Language :
    const [Language, setLanguage] = useState('en');


    //Window Form States :
    const [WindowOpen, setWindowOpen] = useState(false);
    const [WindowName, setWindowName] = useState('');


    return (
        <DataContext.Provider value={{ 
            MailFormOpen , setMailFormOpen ,
            MailFormMinimize , setMailFormMinimize,
            SettingsFormOpen , setSettingsFormOpen,
            NighModActive , setNighModActive,
            WindowOpen , setWindowOpen,
            WindowName , setWindowName,
            Language , setLanguage,
        }}>
          {children}
        </DataContext.Provider>
    )
}  

export default DataContext;