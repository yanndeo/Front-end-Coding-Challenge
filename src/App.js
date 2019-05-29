import React from 'react';
//Redux
import { Provider } from "react-redux";
import store from "./store/index";
function App() {
  return (

    <Provider store={store}>

    <div className="App">
      okay
    </div>
 </Provider>
  );
}

export default App;
