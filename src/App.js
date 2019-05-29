import React from 'react';
//Redux
import { Provider } from "react-redux";
import store from "./store/index";
function App() {
  return (

  <Provider store={store}>

    <div className="App">
      

        <div className="site-section site-section-sm site-blocks-1">
          <div className="container">
            <div className="row">

              <div className="col-md-12 ml-auto">
                <div className="media col-sm-12 col-md-12 col-lg-12 p-4 border mb-3" >

                  <div className="col-sm-2 col-lg-2 mb-2 pull-left" data-aos="fade-up">
                    <figure className="block-4-image">
                      <img className="align-self-center mr-3 img-fluid" src="images/cloth_1.jpg" alt="" />
                    </figure>
                  </div>

                  <div className="media-body">
                    <span className=" text-primary h6 text-uppercase">Dolisie</span>
                    <p className="">203 Fake St. Mountain View, San Francisco, California, USA</p>
                    <p>
                      <a href="#!" className="btn btn-primary">Nb Stars </a> &nbsp; &nbsp;
                      <a href="#!" className="btn btn-primary ">Nb Issues </a>
                      <span> &nbsp; Submitted 30 days ago by tensorflow </span>
                    </p>
                  </div>

                </div>


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
