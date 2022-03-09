import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Helpers/Navbar";

function App() {
  return (
    // Footer
    <Navbar id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <img src="./logo.png" className="img-fluid"/>
          </div>  
          <div className="col-lg-8 col-md-8 col-sm-12">
            Hello
          </div>  
        </div>
        
        &copy;<small>Sarthak Keshari and Anushka Srivastava. All rights reserved.</small>
      </div>
    </Navbar>
  );
}

export default App;
