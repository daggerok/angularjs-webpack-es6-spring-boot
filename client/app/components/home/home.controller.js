class HomeController {
  constructor(Users) {
    this.Users = Users;
    this.$ctrl = this;
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
