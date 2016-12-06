import angular from 'angular';
import Home from './home/home.module';

const ComponentsModule = angular.module('app.components', [
  Home.name,
]);

export default ComponentsModule;
