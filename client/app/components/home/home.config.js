const HomeConfig = ($stateProvider) => {

  $stateProvider.state('home', {
    url: '/',
    template: '<home></home>'
  });
};

export default HomeConfig;
