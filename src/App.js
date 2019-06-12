import React from 'react';

//Redux
import { Provider } from "react-redux";
import store from "./store/index";
//Component
import RepositoryList from './components/RepositoryList';



function App() {
  
  return (

  <Provider store={store}>

    <div className="App">
        <div className="site-section site-section-sm site-blocks-1">
          <div className="container">
            <div className="row">

              <div className="col-md-12 ml-auto">
                <RepositoryList/>
              </div>

            </div>
          </div>
        </div>
      </div>
 </Provider>
  );
}

export default App;
