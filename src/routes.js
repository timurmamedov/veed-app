import React             from 'react';
import { Router, Route } from 'react-router';

import App        from './components/App';
import About      from './components/About';
import NotFound   from './components/NotFound';
import FrontCover from './components/FrontCover';
import Login      from './components/Login';

const Routes = (props) => (
  <Router {...props}>
	    <Route component={App}>
	    	<Route path="/" component={FrontCover} />
	    	<Route path="/about" component={About} />
	    	<Route path='/login' component={Login} />
	    </Route>  
	    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;