angular.module('portfolioApp')
  .directive('portfolioCard', portfolioCard);

function portfolioCard(){
  var directive = {
    //'A' == attribute, 'E' == element, 'C' == class
    restrict: 'EA',
    templateUrl: 'templates/cardDirective.html',
    controller: WdiCardController,
    controllerAs: 'wdiCardCtrl',
    scope:{
       title: '@',
       image: '@'
    }
  };
  return directive;
}

function WdiCardController(){
  var vm = this;
}
