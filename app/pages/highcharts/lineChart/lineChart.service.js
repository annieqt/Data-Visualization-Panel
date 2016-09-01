/**
 * Created by Tian Wang on 9/1/2016.
 */
(function () {
    'use strict';
    angular.module('myApp.highcharts')
        .factory('LineChartService', ['$resource', 'REST',
            function ($resource, REST) {
                return $resource(
                    REST.url.searchLine,
                    {},
                    {
                        searchLine:{
                            url: REST.url.searchLine,
                            method: 'GET',
                            params:{
                                id: '@id',
                                from_date: '@fromDate',
                                to_date: '@toDate'
                            }
                        },
                        searchBar:{
                            url: REST.url.searchBar,
                            method: 'GET',
                            params:{
                                id: '@id'
                            }
                        }
                    }
                );
            }]);
})();
