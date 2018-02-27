// ReactJS application entry point
// All start up components can be loaded here, i.e., bootstrap, css, etc.
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './layout/applicaton-router';
import 'jquery/dist/jquery.min.js';
import 'tether/dist/js/tether.min.js';

ReactDOM.render(<Navigation/>, document.getElementById('root'));