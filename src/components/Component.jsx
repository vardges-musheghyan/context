import {useUserContext} from '../userContext';

function Component(){

    const state = useUserContext();




    return (
        <div>
            <button onClick={() => {
                state.setCounter(7)
            }} >Clicl to icrement</button>
            <div>
                {state.counter}
            </div>
        </div>
    )
}

export default Component;
