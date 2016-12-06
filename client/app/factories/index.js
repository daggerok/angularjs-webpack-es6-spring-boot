import angular from 'angular';
import Users from './user/users.module';

const FactoriesModule = angular.module('app.factories', [
  Users.name,
]);

export default FactoriesModule;
