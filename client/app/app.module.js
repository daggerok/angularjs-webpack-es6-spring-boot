import angular from 'angular';
import uiRouter from 'angular-ui-router';

import ComponentsModule from './components';
import FactoriesModule from './factories';
import Ng15AppConfig from './app.config';
import Ng15AppComponent from './app.component';

const ng15app = angular.module('ng15app', [
  uiRouter,
  FactoriesModule.name,
  ComponentsModule.name
]);

ng15app.config(['$locationProvider', '$urlRouterProvider', Ng15AppConfig]);
ng15app.component('ng15app', Ng15AppComponent);

export default ng15app;
