/**
 * Created by Tian Wang on 9/1/2016.
 */
(function () {
    'use strict';

    angular.module('myApp.highcharts')
        .controller('LineChartCtrl', LineChartCtrl);

    LineChartCtrl.$inject = ['$scope', '$rootScope', 'LineChartService', 'color'];

    /** @ngInject */
    function LineChartCtrl($scope, $rootScope, LineChartService, color) {
        $scope.loading = false;

        var today = new Date();
        var lastYear = new Date();
        lastYear.setFullYear(lastYear.getFullYear() - 1);

        var lastMonth = new Date();
        lastMonth.setMonth(lastMonth.getMonth() - 1);

        var lastQuarter = new Date();
        lastQuarter.setMonth(lastQuarter.getMonth() - 3);

        var lastWeek = new Date();
        lastWeek.setDate(lastWeek.getDate() - 7);

        $scope.period = {
            toDate: today,
            fromDate: lastWeek
        };

        $scope.dateOptions1 = {
            formatYear: 'yy',
            maxDate: today,
            minDate: lastYear,
            startingDay: 1
        };

        $scope.dateOptions2 = {
            formatYear: 'yy',
            maxDate: today,
            minDate: lastWeek,
            startingDay: 1
        };

        $scope.openFromCal = function () {
            $scope.fromCal.opened = true;
        };

        $scope.openToCal = function () {
            $scope.toCal.opened = true;
        };

        $scope.formats = ['yyyy-MM-dd', 'dd-MMMM-yyyy', 'yyyyMMdd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];

        $scope.fromCal = {
            opened: false
        };

        $scope.toCal = {
            opened: false
        };
        $scope.defaultTime = "all";

        $scope.defaultTimes = {
            LastQuarter: {
                fromDate: lastQuarter,
                toDate: today
            },
            LastMonth: {
                fromDate: lastMonth,
                toDate: today
            }
            ,
            LastWeek: {
                fromDate: lastWeek,
                toDate: today
            }
        };

        $scope.itemID = '-1';
        $scope.series = [{
            name: 'Winter 2012-2013',
            data: [
                [Date.UTC(1970, 9, 21), 0],
                [Date.UTC(1970, 10, 4), 0.28],
                [Date.UTC(1970, 10, 9), 0.25],
                [Date.UTC(1970, 10, 27), 0.2],
                [Date.UTC(1970, 11, 2), 0.28],
                [Date.UTC(1970, 11, 26), 0.28],
                [Date.UTC(1970, 11, 29), 0.47],
                [Date.UTC(1971, 0, 11), 0.79],
                [Date.UTC(1971, 0, 26), 0.72],
                [Date.UTC(1971, 1, 3), 1.02],
                [Date.UTC(1971, 1, 11), 1.12],
                [Date.UTC(1971, 1, 25), 1.2],
                [Date.UTC(1971, 2, 11), 1.18],
                [Date.UTC(1971, 3, 11), 1.19],
                [Date.UTC(1971, 4, 1), 1.85],
                [Date.UTC(1971, 4, 5), 2.22],
                [Date.UTC(1971, 4, 19), 1.15],
                [Date.UTC(1971, 5, 3), 0]
            ]
        }, {
            name: 'Winter 2013-2014',
            data: [
                [Date.UTC(1970, 9, 29), 0],
                [Date.UTC(1970, 10, 9), 0.4],
                [Date.UTC(1970, 11, 1), 0.25],
                [Date.UTC(1971, 0, 1), 1.66],
                [Date.UTC(1971, 0, 10), 1.8],
                [Date.UTC(1971, 1, 19), 1.76],
                [Date.UTC(1971, 2, 25), 2.62],
                [Date.UTC(1971, 3, 19), 2.41],
                [Date.UTC(1971, 3, 30), 2.05],
                [Date.UTC(1971, 4, 14), 1.7],
                [Date.UTC(1971, 4, 24), 1.1],
                [Date.UTC(1971, 5, 10), 0]
            ]
        }, {
            name: 'Winter 2014-2015',
            data: [
                [Date.UTC(1970, 10, 25), 0],
                [Date.UTC(1970, 11, 6), 0.25],
                [Date.UTC(1970, 11, 20), 1.41],
                [Date.UTC(1970, 11, 25), 1.64],
                [Date.UTC(1971, 0, 4), 1.6],
                [Date.UTC(1971, 0, 17), 2.55],
                [Date.UTC(1971, 0, 24), 2.62],
                [Date.UTC(1971, 1, 4), 2.5],
                [Date.UTC(1971, 1, 14), 2.42],
                [Date.UTC(1971, 2, 6), 2.74],
                [Date.UTC(1971, 2, 14), 2.62],
                [Date.UTC(1971, 2, 24), 2.6],
                [Date.UTC(1971, 3, 2), 2.81],
                [Date.UTC(1971, 3, 12), 2.63],
                [Date.UTC(1971, 3, 28), 2.77],
                [Date.UTC(1971, 4, 5), 2.68],
                [Date.UTC(1971, 4, 10), 2.56],
                [Date.UTC(1971, 4, 15), 2.39],
                [Date.UTC(1971, 4, 20), 2.3],
                [Date.UTC(1971, 5, 5), 2],
                [Date.UTC(1971, 5, 10), 1.85],
                [Date.UTC(1971, 5, 15), 1.49],
                [Date.UTC(1971, 5, 23), 1.08]
            ]
        }];

        $scope.$watch('defaultTime', function (newVal, oldVal) {
            $scope.defaultTime = newVal;
            switch (newVal) {
                case 'all':
                    break;
                case 'undefined':
                    break;
                default:
                    $scope.period.fromDate = $scope.defaultTimes[newVal].fromDate;
                    $scope.period.toDate = $scope.defaultTimes[newVal].toDate;
                    searchLine();
                    break;
            }
        });

        $scope.$on('newItemSelected', function (event, arg) {
            $scope.itemID = arg;
            searchLine();
        });

        $scope.searchFn = function () {
            searchLine();
        };

        function searchLine() {
            $scope.loading = true;
            var formattedFrom = formatDate($scope.period.fromDate);
            var formattedTo = formatDate($scope.period.toDate);

            LineChartService.searchLine(
                {
                    id: $scope.itemID,
                    from_date: formattedFrom,
                    to_date: formattedTo
                }
            ).$promise.then(handleLineSuccess, handleLineError)
                .then(function (data) {
                    //TODO: generate series by data
                    $scope.series = data;
                });

            $scope.loading = false;
        }

        function handleLineError(response) {
            //Mock Data
            var data = '';
            return JSON.parse(data);
        }

        function handleLineSuccess(response) {
            return (response.content );
        }

        function formatDate(date) {
            return ""
                + date.getFullYear()
                + (date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : '' + date.getMonth())
                + (date.getDate() < 10 ? '0' + date.getDate() : '' + date.getDate());
        }
    }
})();
