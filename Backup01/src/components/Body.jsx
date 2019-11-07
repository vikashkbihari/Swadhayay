import React, {Component} from 'react';
//import '../../src/Style.css';
import '../../src/Style.css'
import intro from '../resource/intro_img.png';
import card_1 from '../resource/card_1.jpg';
import card_2 from '../resource/card_2.jpg';
import card_3 from '../resource/card_3.jpg';
class Body extends Component {
    render() {    
      return ( 
        <div className="container-fluid pad-100  fit-content text-align-center">
          <h1>Welcome to Swadhayay</h1>
          <h2>Personalized learning for you &amp; more...</h2>
              <img src={intro} className="App-logo" alt="logo" />
              <div class="container-fluid pad30">
              <h2>It's customized and designed for you</h2>
              <h3>Swadhayay came with a vision to help students learn concept the right way and overcome the difficulties they face due to traditional blackboard learning.</h3>
          <div className="container-fluid pad-30 ">
           <div className="row">
            <div className="col-md">
            <div className="card" style={{width: '18rem'}}>
              <img src={card_1} className="card-img-top" alt="..." />
               <div className="card-body">
                <h5 className="card-title">Test Yourself</h5>
                
               <p className="card-text">Our Tests are designed in a way that they will expose your deficiency and encourages you to think the concepts.</p>
                 <a href="/Test" className="btn btn-primary">Take Test</a>
               </div>
            </div>
            </div>
            <div className="col-sm">
            <div className="card" style={{width: '18rem'}}>
              <img src={card_2} className="card-img-top" alt="..." />
               <div className="card-body">
                <h5 className="card-title">Analyse</h5>
               <p className="card-text">Developing logical reasoning by finding the reason for the question for which you answered incorrectly.</p>
                 <a href="/Analyse" className="btn btn-primary">Analyse</a>
               </div>
            </div>
            </div>
            <div className="col-sm">
            <div className="card" style={{width: '18rem'}}>
              <img src={card_3} className="card-img-top" alt="..." />
               <div className="card-body">
                <h5 className="card-title">Learn</h5>
               <p className="card-text">Based on your test analysis, we will recommend the learning resource, which wil help you to build your concept.</p>
                 <a href="/Learn" className="btn btn-primary">Start Learning</a>
               </div>
            </div>
            </div>
          </div>
          </div>
      </div>

      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">It's customized and designed for you</h1>
          <p className="lead">Swadhayay came with a vision to help students learn concept the right way and overcome the difficulties they face due to traditional blackboard learning.</p>
        </div>
      </div>
  
      <div className="container col-lg-12">
      <div className="copyrights">
        <div className="container">
          <p>© Copyrights Swadhayay. All rights reserved.</p>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">SwadhayayTeam</a>
          </div>
        </div>
      </div>
      </div>
      </div>
      );
    }
  }
 export default Body;