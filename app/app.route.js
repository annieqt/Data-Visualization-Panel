var app = angular.module('myApp').config(config);
config.$inject = ['$stateProvider', '$urlRouterProvider'];

function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/vis');
    $stateProvider.state("vis", {
        url: '/vis',
        controller: 'VisCtrl',
        templateUrl: "app/pages/vis/vis.html"
    }).state("highcharts", {
        url: '/highcharts',
        controller: 'HighchartsCtrl',
        templateUrl: "app/pages/highcharts/highcharts.html"
    }).state("d3", {
        url: '/d3',
        controller: 'D3Ctrl',
        templateUrl: "app/pages/d3/d3.html"
    });

}
