// angular.module('myApp')
//   .directive('portfolioCard', portfolioCard);
//
//   function portfolioCard(){
//     var directive = {
//
//       restrict: 'E',
//       replace: true,
//       templateUrl: '/templates/cardDirective.html'
//       // scope: {
//       //   title: '@'
//       // };
//     };
//     return directive;
//   }

angular.module('CardsAgainstAssembly')
  .directive('wdiCard', wdiCard);

function wdiCard(){
  var directive = {
    //'A' == attribute, 'E' == element, 'C' == class
    restrict: 'EA',
    templateUrl: 'templates/cardDirective.html',
    controller: WdiCardController,
    controllerAs: 'wdiCardCtrl',
    scope:{
      question: '@',
       image: '@'
    }
  };
  return directive;
}

function WdiCardController(){
  var vm = this;
}
