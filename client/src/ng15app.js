import 'bootstrap/dist/css/bootstrap.css';
import 'angular/angular-csp.css';
import './index.styl';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import Ng15AppComponent from './ng15app.component.js';
import Components from './components';
import Factories from './factories';

const ng15app = angular.module('ng15app', [
  uiRouter,
  Factories.name,
  Components.name
]);

ng15app.component('ng15app', Ng15AppComponent);

export default ng15app;
