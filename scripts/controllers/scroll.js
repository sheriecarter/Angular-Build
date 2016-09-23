

angular.module('portfolioApp')
  .controller('pageController', pageController);

// add injections here [$scope, $location, $anchorScroll]
function pageController($scope, $location, $anchorScroll){

    $scope.scrollTo = function (scrollLocation) {


      $location.hash(scrollLocation);

      // call $anchorScroll
        $anchorScroll();

    }

  };
