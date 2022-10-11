import React from "react";
import {GlobalStyle } from "./global/globalStyle"
import {Router} from "./router/Router"
import {GlobalState} from "./global/GlobalState"

const App = () => {
  return (
    <GlobalState>
      <GlobalStyle/>
    <Router/>
    </GlobalState>
  );
}

export default App;
