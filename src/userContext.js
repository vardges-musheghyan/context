import {createContext, useState, useContext} from 'react';


const UserContextObject = createContext(null);


export const useUserContext = () => useContext(UserContextObject);


function UserContext({ children }){
    const [counter, setCounter] = useState(0);

    const setCounterStrict = (num) => {
        setCounter(num)
    }

    return (
        <>
            <UserContextObject.Provider value={ { counter, setCounter: setCounterStrict } } >
                {children}
            </UserContextObject.Provider>
        </>
    )
}

export default UserContext;










