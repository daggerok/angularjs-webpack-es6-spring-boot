import template from './home.tpl.html';
import controller from './home.controller';

const HomeComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller,
  bindToController: true,
  // controllerAs: '$ctrl', // by default
};

export default HomeComponent;
