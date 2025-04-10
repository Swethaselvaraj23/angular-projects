var app = angular.module('todoApp', []);

app.controller('todoCtrl', function($scope) {
    $scope.tasks = [
      { text: "Learn AngularJS", done: false },
      { text: "Build a to-do app", done: false }
    ];

  $scope.newtask = "";

  $scope.addtask = function() {
    if ($scope.newtask.trim() !== "") {
      $scope.tasks.push({ text: $scope.newtask });
      $scope.newtask = "";
    }
  };

  $scope.removetask = function(index) {
    $scope.tasks.splice(index, 1);
  };
});
