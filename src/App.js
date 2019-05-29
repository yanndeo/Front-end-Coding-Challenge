import React from 'react';


//Redux
import { Provider } from "react-redux";
import store from "./store/index";
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

                <div className="p-4 border mb-3">
                  <span className="d-block text-primary h6 text-uppercase">Canada</span>
                  <p className="mb-0">203 Fake St. Mountain View, San Francisco, California,  Mountain View, San Francisco, California, USA</p>
                </div>

              </div>

            </div>

          </div>
        </div>


      </div>


 </Provider>
  );
}

export default App;
