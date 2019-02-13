import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<Router>
//					<Route path="/" component={App} />
//				</Router>
//, document.getElementById('root'));

ReactDOM.render(<Router>
	<Route path="/" component={App2} />
</Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
