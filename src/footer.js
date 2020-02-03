import React, { Component } from 'react';
import Clock from './clock';
import Link from 'next/link';

import './App.scss';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="footer_container">
                <p><Link href="/">Main Page</Link></p>
                <p><Link href="/about" title="About Page"><a>About</a></Link></p>
                <p><a href="/">Contact</a></p>
                <p><Clock title="Ankara" datediff={0} /></p>
            </div>
         );
    }
}
 
export default Footer;