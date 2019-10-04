import React, { Component } from 'react';
import Clock from './clock';

import './App.scss';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="footer_container">
                <p><a href="/">Main Page</a></p>
                <p><a href="/">About</a></p>
                <p><a href="/">Contact</a></p>
                <p><Clock title="Ankara" datediff={0} /></p>
            </div>
         );
    }
}
 
export default Footer;