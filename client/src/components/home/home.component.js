import template from './home.tpl.html';
import controller from './home.controller';

const HomeComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller,
  controllerAs: 'vm',
  bindToController: true
};

export default HomeComponent;
