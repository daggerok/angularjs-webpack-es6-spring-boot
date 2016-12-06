import angular from 'angular';
import uiRouter from 'angular-ui-router';

import HomeConfig from './home.config';
import HomeComponent from './home.component';

const HomeModule = angular.module('home', [uiRouter]);

HomeModule.config(['$stateProvider', HomeConfig]);
HomeModule.component('home', HomeComponent);

export default HomeModule;
