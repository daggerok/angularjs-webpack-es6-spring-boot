import angular from 'angular';
import uiRouter from 'angular-ui-router';
import HomeComponent from './home.component';

const HomeModule = angular.module('home', [uiRouter]);

HomeModule.component('home', HomeComponent);

HomeModule.config([
  '$stateProvider', '$urlRouterProvider',
  ($stateProvider, $urlRouterProvider) => {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
      url: '/',
      template: '<home></home>'
    });
}]);

export default HomeModule;
