import React from "react";
import {GlobalStyle } from "./global/globalStyle"
import {GlobalProvider} from "./provider/GlobalProvider"
import {Router} from "./router/Router"


const App = () => {
  return (
    <GlobalProvider>
      <GlobalStyle/>
    <Router/>
    </GlobalProvider>
  );
}

export default App;
