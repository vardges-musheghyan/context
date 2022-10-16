import useLanguageContext from "../hooks/useLanguageContext";

function translate(langauge, text){
    if (langauge === 'en') return text;
    else if (langauge === 'am'){
        return 'լանգւագե կոմպննենտ'
    }
}

function LanguageComponent(){
    const { language } = useLanguageContext();
    return (
        <div>
            {translate(language,'Language Component')}
        </div>
    )
}

export default LanguageComponent;
