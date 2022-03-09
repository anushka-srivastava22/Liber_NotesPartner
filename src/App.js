import logo from "./logo.svg";
import "./App.css";
import ContactUs from "./Helpers/ContactUs";
import Navbar from "./Helpers/Navbar";

function App() {
  return (
    <>
      {/* Header */}
      <Navbar id="header">
      
      </Navbar>
      {/* Base */}

      {/* Footer */}
      <Navbar id="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img
                src="./logo.png"
                width="70%"
                className="img-fluid mx-auto d-block"
              />
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="row my-4">
                <div className="col-lg-4 col-sm-6">
                  <p>Hello</p>
                  <p>Hello</p>
                  <p>Hello</p>
                  <p>Hello</p>
                </div>
                <div className="col-lg-4 col-sm-6 mt-auto ml-auto">
                    <ContactUs></ContactUs>
                </div>
                <div className="col-lg-4 col-sm-6">
                  {/* No Content here */}
                </div>
              </div>
            </div>
          </div>

          <small id="copyright">
            &copy; Sarthak Keshari and Anushka Srivastava. All rights reserved.
            2022
          </small>
        </div>
      </Navbar>
    </>
  );
}

export default App;
