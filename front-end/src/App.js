import React from "react";
import {GlobalProvider} from "./provider/GlobalProvider"
 
const App = () => {
  return (
    <GlobalProvider>
    <div >
      <h1>app</h1>
    </div>
    </GlobalProvider>
  );
}

export default App;
