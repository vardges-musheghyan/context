import useLanguageContext from "../hooks/useLanguageContext";

function Header(){


    const { changeLanguage } = useLanguageContext();

    const handleLanguageChange = () => {
        changeLanguage('am')
    }
    return (
        <div>
            Header
            <button onClick={handleLanguageChange} > Change Language </button>
        </div>
    )
}

export default Header;
