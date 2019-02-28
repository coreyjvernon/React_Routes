import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './CSS/index.css';

import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';

const Navbar = () => {
	return(
		<Router>
			<div>
				<ul>
					<li>
    				<Link to="/">Home</Link>
					</li>
					<li>
    				<Link to="/happy">Happy</Link>
					</li>
					<li>
   					<Link to="/sleepy">Sleepy</Link>
					</li>
					<li>
    				<Link to="/guilty">Guilty</Link>
					</li>
				</ul>
				<hr />

<Route exact path="/" component={Home} />
<Route path="/happy" component={Happy} />
<Route path="/sleepy" component={Sleepy} />
<Route path="/guilty" component={Guilty} />

</div>
</Router>
)
};


class Home extends Component{
  render(){
    return(Navbar)
  }
}
//

ReactDOM.render( <Navbar />, 
  document.getElementById('root') );