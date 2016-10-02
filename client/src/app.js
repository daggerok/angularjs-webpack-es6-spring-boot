/**
 * ng15app (c) daggerok 2016
 */
import 'bootstrap/dist/css/bootstrap.css';
import 'angular/angular-csp.css';

import angular from 'angular';
import 'angular-route';

import user from './user/service';

const ng15app = angular.module('ng15app', [
  'ngRoute',
  user.name
]);

/*
ng15app.directive('ng15app', () => {
  return {
    template: require('./app.tpl.html'),
    styles: [require('./app.styl')],
    controller: 'Ctrl'
  };
});
 */

ng15app.component('ng15app', {
  template: require('./app.tpl.html'),
  styles: [require('./app.styl')],
  controller: 'Ctrl'
});

ng15app.controller('Ctrl', ['$scope', 'User', ($scope, User) => {
  const that = this;

  $scope.users = [];
  $scope.get = () => User.getUsers().then(
    ok => $scope.users = ok.data._embedded.users,
    err => console.error(err)
  );

  return that;
}]);

ng15app.config([
  '$locationProvider', '$routeProvider',
  ($locationProvider, $routeProvider) => {
    $locationProvider.hashPrefix('!');

    $routeProvider
    // .when('/', { template: require('./app.tpl.html') })
      .otherwise('/');
  }
]);

angular.bootstrap(document, ['ng15app']);
