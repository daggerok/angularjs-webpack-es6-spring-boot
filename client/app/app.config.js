const Ng15AppConfig = ($locationProvider, $urlRouterProvider) => {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
};

export default Ng15AppConfig;
