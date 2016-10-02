import angular from 'angular';
import Users from './user/users.module';

const Factories = angular.module('app.factories', [
  Users.name,
]);

export default Factories;
