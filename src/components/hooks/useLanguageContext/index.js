import { useContext } from "react";

import LanguageContext from './languageContext';


function useLanguageContext(){
    return useContext(LanguageContext);
}

export default useLanguageContext;






