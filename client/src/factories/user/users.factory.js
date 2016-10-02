class UsersFactory {
  constructor($http) {
    this.$http = $http;
    this.url = '/api/users';
  }

  getUsers() {
    return this.$http.get(this.url);
  }

  static createInstance($http) {
    UsersFactory.instance = new UsersFactory($http);
    return UsersFactory.instance;
  }
}

UsersFactory.createInstance.$inject = ['$http'];

export default UsersFactory;
