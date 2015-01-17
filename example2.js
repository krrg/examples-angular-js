angular.module('todoApp', [])
.controller('TodoController', ['$scope', function($scope) {

    $scope.todos = [
        {
            text: 'Create controller',
            done: false
        },
        {
            text: 'Build an app of awesomeness.',
            done: false
        }
    ]

    $scope.countRemaining = function() {
        var count = 0;
        for (var i in $scope.todos) {
            var todo = $scope.todos[i]
            if (! todo.done) {
                count++;
            }
        }
        return count;
    }

    $scope.countTodos = function() {
        return $scope.todos.length;
    }

    $scope.reset = function() {
        angular.forEach($scope.todos, function(todo){
            todo.done = false;
        })
    }

    $scope.addTodo = function() {
        $scope.todos.push({text: $scope.newTodoText, done: false});
        $scope.newTodoText = '';  // Reset the text for the next add.
    }

}]);
