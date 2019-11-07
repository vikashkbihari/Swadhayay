import React, {Component} from 'react';
//import '../../src/Style.css';
import logo from '../resource/favicon.ico';
import intro from '../resource/intro_img.png'
//import '../resource/favicon.ico';
class Header extends Component {
    render() {    
      return ( 
        <div> 
        
{/*           
    <button type="button" class="btn btn-primary">Primary</button>
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
            <img src={logo} className="App-logo" alt="logo" />
            <img src="../resource/favicon.ico" width={30} height={30} className="d-inline-block align-top" alt="" />
          Bootstrap
        </a>
      </nav> */}
          <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
          <img src={logo} className="App-logo" alt="logo" />
            <a className="navbar-brand" href="/">Swadhayay</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">About Us <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Resources</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Courses
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Math</a>
                <a className="dropdown-item" href="#">Science</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">Competitive Exams</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Take Test</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
     
        </div>
      );
    }
  }


 
 export default Header;