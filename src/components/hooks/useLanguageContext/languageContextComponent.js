import LanguageContext from './languageContext';
import {useState} from "react";


function LanguageContextProvider({ children }){

    const [language, setLanguage] = useState('en')

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage)
    }

    return (
        <LanguageContext.Provider value={ { changeLanguage, language } } >
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageContextProvider;
