import angular from 'angular';

export const name = 'user.service';
export const url = '/api/users';

export default angular
  .module(name, [])
  .factory('User', ['$http', ($http) => {
    return {
      getUsers: () => $http.get(url)
    }
  }]);
