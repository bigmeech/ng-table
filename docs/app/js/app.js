var NAVSERVICE_CONSTANT = require('./nav-service');
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

ngTableDoc.constant('NAVSERVICE', NAVSERVICE_CONSTANT.data)
