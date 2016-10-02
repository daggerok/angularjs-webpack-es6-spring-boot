import angular from 'angular';
import Home from './home/home.module';

const Components = angular.module('app.components', [
  Home.name,
]);

export default Components;
