import Header from "./components/header";
import ComponentX from "./components/componentX";
import LanguageContextProvider from "./components/hooks/useLanguageContext/languageContextComponent";

function App(){

    return (
        <LanguageContextProvider >
        <div>
            <Header />
            <ComponentX/>
        </div>
        </LanguageContextProvider>
    )
}


export default App;
