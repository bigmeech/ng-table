var NAVSERVICE_CONSTANT = require('./nav-service');
var ngTableDoc = angular.module('ngTableDoc', ['ui.router', 'ngMessages'])
    .config([
        'NAVSERVICE',
        '$stateProvider',
        '$urlRouterProvider',
        function (NAVSERVICE, $stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('gettingStarted', {
                    url:'/docs/get-started',
                    templateUrl: '/partials/get-started.html',
                    controller:'NavController'
                })
                .state('api', {
                    url:'/docs/api',
                    templateUrl:function($stateParams){
                        return '/partials/'+ $stateParams.api +'.html';
                    },
                    controller:'NavController'
                })
                .state('examples',{
                    url:'/docs/api/examples',
                    templateUrl:'/partials/examples/',
                    controller:'NavController'
                });
        }
    ])
    .controller('MainController', function ($scope) {
        var vm = {};
        vm.currentPage = "start";
        $scope.vm = vm;
    })
    .controller('NavController', function (NAVSERVICE,$stateParams) {
        console.log(NAVSERVICE, $stateParams);
    });

ngTableDoc.constant('NAVSERVICE', NAVSERVICE_CONSTANT.data)
