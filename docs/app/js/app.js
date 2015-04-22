var ngTableDoc = angular.module('ngTableDoc',['ngRoute', 'ngMessages'])
    .config([
        'NAVSERVICE',
        '$routeProvider',
        function(NAVSERVICE, $routeProvider){
            $routeProvider.when('/',{
                templateUrl:'/partials/get-started.template.html'
            })
        }
    ])
    .controller('MainController', function($scope){
        var vm = {};
        vm.currentPage = "start";
        $scope.vm = vm;
    })
    .controller('APIController', function(){

    })
    .controller('RunnableController', function(){

    });
