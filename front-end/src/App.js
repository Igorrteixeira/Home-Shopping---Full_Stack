import React from "react";
import {GlobalStyle } from "./global/globalStyle"
import {Router} from "./router/Router"


const App = () => {
  return (
    <div>
      <GlobalStyle/>
    <Router/>
    </div>
  );
}

export default App;
