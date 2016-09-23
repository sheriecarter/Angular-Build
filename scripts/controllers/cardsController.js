  angular.module('portfolioApp')
    .controller('cardsController', cardsController);


  function cardsController(){
    var vm = this;


    vm.stuffInCard=[
      {
        title: "MY Site",
        image: "selfie.png"
      },

      {
        title: "Personal Site",
        image: "selfie.png"
      },

      {
        title: "Tic Tac Toe",
        image: "selfie.png"
      },

      {
        title: "HangMan",
        image: "selfie.png"
      },

      {
        title: "Tunely Angular",
        image: "selfie.png"
      },


      {
        title: "Book App",
        image: "selfie.png"
      }

    ]
  }
