// angular
//   .module('myApp')
//   .controller('cardsController', cardsController);

  // function cardsController(){
  //   var vm=this;
  //   vm.cardList =[
  //     {title: "Project 1"}
  //   ]
  // }


  angular.module('CardsAgainstAssembly')
    .controller('cardsController', cardsController);


  function cardsController(){
    var vm = this;


    vm.questionsList=[
      {
        question: "MY Site",
        image: "selfie.png"
      },

      {
        question: "Personal Site",
        image: "selfie.png"
      },

      {
        question: "Tic Tac Toe",
        image: "selfie.png"
      },

      {
        question: "HangMan",
        image: "selfie.png"
      },

      {
        question: "Tunely Angular",
        image: "selfie.png"
      },


      {
        question: "Book App",
        image: "selfie.png"
      }

    ]
  }
