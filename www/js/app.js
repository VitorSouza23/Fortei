// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.controller('mainController', function($scope, $ionicPopup, $ionicListDelegate){//Ionic Popup Vídeo 09
    var tasks = new getTasks();
    $scope.items = tasks.items;
    //$scope.showMarked = false -> Não adicone pq dá probrema
    $scope.removeStatus = false;
  
    $scope.onMarkTask = function(item){ //Vídeo 06
        console.log("passou");
        item.finalizada = !item.finalizada;
        tasks.save();// Vídeo 11;
    };
    
    function getItem(item, novo){//Vídeo 09, novo Vídeo 10
        $scope.data = {};
        $scope.data.newTask = item.nome; //item.nome Vídeio 10
        $ionicPopup.show({
            title: "Tarefa",
            scope: $scope,
            template: "<input type='text' placeholder='Tarefa' autofocus='true' ng-model='data.newTask'>",
            buttons: [
                {text: "Cancelar"},
                {
                    text: "OK",
                    onTap: function(e){
                        item.nome = $scope.data.newTask;
                        if(novo === true){// Vídeo 10
                            tasks.add(item);
                        }
                        tasks.save();// Vídeo 11
                    }
                }
            ]
        });
        $ionicListDelegate.closeOptionButtons();// Vídeo 10
    }
    
    $scope.onShowItem = function (item){// Vídeo 07
        return item.finalizada && !$scope.showMarked;
    };
    
    $scope.onItemRemove = function (item){// Vídeo 08
        tasks.remove(item);
        tasks.save();// Vídeo 11
    };
    
    $scope.onClickRemove = function (){// Vídeo 08
        $scope.removeStatus = !$scope.removeStatus;
    };
    
    $scope.onItemAdd = function (){// Vídeo 09
        item = {nome:"", finalizada: false};
        getItem(item, true);
    };
    
    $scope.onItemEdit = function(item){// Vídeo 10
        getItem(item, false);
    }
});
