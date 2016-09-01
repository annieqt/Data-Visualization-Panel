/**
 * Created by Tian Wang on 9/1/2016.
 */
(function () {
    'use strict';

    angular.module('myApp')
        .controller('AppCtrl', ['$scope', '$state', AppCtrl]);


    /** @ngInject */
    function AppCtrl($scope, $state) {
        $scope.tabs = [
            {
                heading: 'vis.js',
                id: 'tab1',
                state:'vis',
                href: '#/vis',
                color: "w3-blue"
            },
            {
                heading: 'HighCharts',
                id: 'tab2',
                state:'highcharts',
                href: '#/highcharts',
                color: ""
            },
            {
                heading: 'D3.js',
                id: 'tab3',
                state:'d3',
                href: '#/d3',
                color: ""
            }
        ];

        $scope.active = function (state) {
            var flag = $state.is(state);
            return flag;
        };
        $scope.showSideBar = true;
        $scope.$on('$stateChangeSuccess', function () {
            $scope.tabs.forEach(function (tab) {
                tab.color = "";
                if ($scope.active(tab.state)) {
                    tab.color = "w3-blue"
                }
            });

        });
    }
})();
