import angular from 'angular';

export const url = '/api/users';

const User = ($http) => {
  return {
    getUsers: () => $http.get(url)
  }
};

export default angular
  .module('user.service', [])
  .factory('User', ['$http', User]);
