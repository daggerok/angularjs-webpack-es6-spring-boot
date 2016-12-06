import angular from 'angular';
import UsersFactory from './users.factory';

const UsersModule = angular.module('user', []);

UsersModule.factory('Users', ['$http', UsersFactory.createInstance]);

export default UsersModule;
