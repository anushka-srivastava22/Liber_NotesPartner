
import "./App.css";
import ContactUs from "./Helpers/ContactUs";
import Navbar from "./Helpers/Navbar";
import { Dropdown } from 'react-bootstrap';



function App() {

  return (
    <>
      {/* Header */}
      <Navbar id="header"  >
        <div className="d-flex justify-content-start align-items-center">
          <span className="">
            <img
              src="./logo.png"
              width="17%"
              className=" m-0"
            />
          </span>
          
            <Dropdown className="float-start">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Domain
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">CS/IT</Dropdown.Item>
                <Dropdown.Item href="#/action-2">ECE</Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>
          

        </div>

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
