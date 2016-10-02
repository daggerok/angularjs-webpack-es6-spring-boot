class HomeController {
  constructor(Users) {
    this.Users = Users;
    this.name = 'home';
    this.users = [];
  }

  getUsers() {
    this.Users.getUsers().then(
      ok => this.users = ok.data._embedded.users,
      err => console.error(err)
    );
  }
}

HomeController.$inject = ['Users'];

export default HomeController;
