import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from  './components/Home/Home.js';
import About from  './components/About/About.js';
import ClassList  from  './components/ClassList/ClassList';
import Student from './components/Student/Student';


export default(
 <Switch>
     <Route exact path="/" component={Home} />
     <Route path="/about" component={About} />
     <Route path="/classlist/:class" component={ClassList} />
     <Route path='/student/:id' component={ Student }  />
 </Switch>
)