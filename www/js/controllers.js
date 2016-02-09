angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state){
  $scope.data = {};

  $scope.login = function(){
    LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data){
      $state.go('tab.dash');
    }).error(function(data){
      var alertPopup = $ionicPopup.alert({
        title: 'Login failed!',
        template: 'Please check your credentials!'
      });
    });
  }

  $scope.signup = function(){
    $state.go('signup');
  }
})

.controller('DashCtrl', function($scope) {
  //  var deploy = new Ionic.Deploy();
  
  // // Update app code with new release from Ionic Deploy
  // $scope.doUpdate = function() {
  //   deploy.update().then(function(res) {
  //     console.log('Ionic Deploy: Update Success! ', res);
  //   }, function(err) {
  //     console.log('Ionic Deploy: Update error! ', err);
  //   }, function(prog) {
  //     console.log('Ionic Deploy: Progress... ', prog);
  //   });
  // };

  // // Check Ionic Deploy for new code
  // $scope.checkForUpdates = function() {
  //   console.log('Ionic Deploy: Checking for updates');
  //   deploy.check().then(function(hasUpdate) {
  //     console.log('Ionic Deploy: Update available: ' + hasUpdate);
  //     $scope.hasUpdate = hasUpdate;
  //   }, function(err) {
  //     console.error('Ionic Deploy: Unable to check for updates', err);
  //   });
  // }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
