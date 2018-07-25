import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import App from './components/App';
import Mainho from './components/Mainho';
import Login from './components/Login';


const apps = document.getElementById('app');


const express = require('./express');
//const app = express();


//ReactDOM.render(<App />, app);

ReactDOM.render((
	<BrowserRouter>
		<div>
		<Route exact path="/" component={App}></Route>
		<Route path="/mainho/:param?" component={Mainho}></Route>
		<Route path="/login" component={Login}></Route>
		</div>
	</BrowserRouter>
), apps)