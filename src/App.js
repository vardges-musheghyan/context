
import UserContext from "./userContext";

import Component from './components/Component'


function App() {
  return (
      <>
      <UserContext>
    <div className="App">
      Hello
    </div>
          <Component />
      </UserContext>
      </>
  );
}

export default App;
