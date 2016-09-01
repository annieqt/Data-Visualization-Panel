/**
 * Created by Tian Wang on 9/1/2016.
 */
(function () {
    'use strict';

    angular.module('myApp.vis')
        .controller('TimelineGraphCtrl', TimelineGraphCtrl);

    TimelineGraphCtrl.$inject = ['$scope', '$rootScope', 'chartSize', 'color', 'DSType'];

    /** @ngInject */
    function TimelineGraphCtrl($scope, $rootScope, chartSize, color, DSType) {
        $scope.loading = false;
        $scope.show = true;
        $scope.graphData = [
            {
                "id": 1,
                "content": "item 1",
                "start": "2014-04-20"
            },
            {
                "id": 2,
                "content": "item 2",
                "start": "2014-04-14"
            },
            {
                "id": 3,
                "content": "item 3",
                "start": "2014-04-18"
            },
            {
                "id": 4,
                "content": "item 4",
                "start": "2014-04-16",
                "end": "2014-04-19"
            },
            {
                "id": 5,
                "content": "item 5",
                "start": "2014-04-25"
            },
            {
                "id": 6,
                "content": "item 6",
                "start": "2014-04-27",
                "type": "point"
            }
        ];
        $scope.graphOptions = {};

        $scope.$on('newItemSelected', function (event, arg) {
            $scope.loading = true;
        });

        $scope.$on('updateTimelineGraph', function (event, arg) {
            var graphData = new vis.DataSet(arg.items);
            $scope.graphData = graphData;
            $scope.loading = false;
            $scope.show = true;
        });


    }
})();
