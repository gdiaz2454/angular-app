var myApp = angular.module('myapp',[])

/* Regular JavaScript Variable
Which holds inside of it an object in literal notation*/
var gems = [{
  name: "Diamond",
  price:999.99,
  description:"Diamonds are a girls most expensive best friend.",
  canPurchase:true,
  images:[{
    full:"Images/gem-01.gif"
  }],
  Reviews:[{
    stars:4,
    body:"Beautifully cut and simply stunning although the diamond could use a cleaning.",
    author:"gmantruck35@gmail.com"
  }]
},{
  name:"Sapphire",
  price:99.99,
  description: "This can be yours for one low price of 3 easy payments.",
  canPurchase:true,
  images:[{
    full:"Images/gem-02.gif"
  }],
  Reviews:[{
    stars:2,
    body:"The sapphire was barely blue and didn't come in the shape I ordered but the gem was a great price.",
    author:"jenisse.rodriguez@yahoo.com"
  }]
},{
  name:"Emerald",
  price:79.99,
  description:"Match your beauty with a gem full of brightness.",
  canPurchase:true,
  images:[{
    full:"Images/gem-03.gif"
  }],
  Reviews:[{
    stars:"",
    body:"",
    author:""
  }]
},{
  name:"Ruby",
  price:59.99,
  description:"On a budget? Purchase one of our extravagant sapphires today!",
  canPurchase:true,
  images:[{
    full:"Images/gem-04.gif"
  }],
  Reviews:[{
    stars:"",
    body:"",
    author:""
  }]
},{
  name:"Jadeite",
  price:124.99,
  description:"Cant't go wrong with jade beautiful and exquisite for a great price.",
  canPurchase:true,
  images:[{
    full:"Images/gem-05.gif"
  }],
  Reviews:[{
    stars:"",
    body:"",
    author:""
  }]
},{
  name:"Black opal",
  price:199.99,
  description:"Even though the name says black the colors from this gem will knock you away.",
  canPurchase:true,
  images:[{
    full:"Images/gem-06.gif"
  }],
  Reviews:[{
    stars:"",
    body:"",
    author:""
  }]
},{
  name:"Colored diamonds",
  price:1499.99,
  description:"A diamond but even more beautiful with color.",
  canPurchase:true,
  images:[{
    full:"Images/gem-07.gif"
  }],
  Reviews:[{
    stars:"",
    body:"",
    author:""
  }]
},{
  name:"Painite",
  price:799.99,
  description:"Considered one of the rarest gems in world and isn't painful at all to wear.",
  canPurchase:true,
  images:[{
    full:"Images/gem-08.gif"
  }],
  Reviews:[{
    stars:"",
    body:"",
    author:""
  }]
},{
  name:"Musgravite",
  price:1299.99,
  description:"Also one of the rarest gems in the world, except musgravite is little mor rare than painite.",
  canPurchase:true,
  images:[{
    full:"Images/gem-09.gif"
  }],
  Reviews:[{
    stars:"",
    body:"",
    author:""
  }]
},{
  name:"Alexandrite",
  price:499.99,
  description:"If your birthday is in june you'll love this gem but otherwise its one of the few gems that change color in the light!",
  canPurchase:true,
  images:[{
    full:"Images/gem-10.gif"
  }],
  Reviews:[{
    stars:"",
    body:"",
    author:""
  }]
}]

//seperate Variable for Alias Example
var bBall = {
  name:"Tracy McGrady",
  team:"Houston Rockets",
  halloffame:"2017"
}

myApp.controller("myController",function($scope){
  //Angular scoped Variables
  $scope.gems = gems;
});
//Panel controller
myApp.controller("panelController",function($scope){
  $scope.tab = 1;

  $scope.selectTab = function(newTab){
    /*Grab the scoped tab from above
    and set it equalto newTab*/
    $scope.tab = newTab;
  }

})

myApp.controller("ReviewController", function($scope){
  $scope.newReview = {};
  $scope.addReview = function(product){
    if(!product.Reviews){
      product.Reviews = [];
        $scope.newReview = {};
    }
    product.Reviews.push($scope.newReview);
    console.log("yoo")
  }
})




//myApp.controller("aliasController",function(){
  //Angular Aliased Variable
  //this.bBall = bBall;
//})

myApp.directive("displayName",function(){
  return {
    template: '<div> <h1> Gabriel Diaz </h1> </div>'
  }
});
