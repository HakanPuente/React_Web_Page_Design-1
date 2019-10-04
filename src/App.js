import React, { Component } from 'react';
import Footer from './footer';

import './App.scss';
import Text from "./text.json";

class App extends Component {
  state = {
  }

  

  render(){
    return (
      <div className="App">
      <Footer />
      <div className="analog_clock">
      {/* <Clock title="Tokyo" datediff={1}/>
      <Clock title="London" datediff={-1} />
      <Clock title="New York" datediff={-2} /> */}
      
      </div>
      <div className="mainpage_title_background">
       <h1 className="mainpage_title">L O R E M _ I P S U M</h1>
      </div>
      <div className="mainpage_text_background">
        <div className="mainpage_leftside"></div>
        <p className="mainpage_text">{ Text.text }</p>
      </div>
      <div className="mainpage_transparent"></div>
      </div>
    );
  }
  }
  

export default App;
