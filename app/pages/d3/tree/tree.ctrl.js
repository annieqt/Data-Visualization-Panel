/**
 * Created by Tian Wang on 9/1/2016.
 */
(function () {
    'use strict';

    angular.module('myApp.d3')
        .controller('TreeCtrl', TreeCtrl);

    TreeCtrl.$inject = ['$scope', '$rootScope'];

    /** @ngInject */
    function TreeCtrl($scope, $rootScope) {
        $scope.myData = [10,20,30,40,60, 80, 20, 50];
    }
})();
