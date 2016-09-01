'use strict';
console.log("myApp init")

var myApp = angular.module('myApp', [
    'ui.bootstrap',
    'ui.router',
    'ngAnimate',
    'ngTouch',
    'myApp.vis',
    'myApp.highcharts',
    'myApp.d3',
    'ngSanitize',
    'ngResource'
]);
