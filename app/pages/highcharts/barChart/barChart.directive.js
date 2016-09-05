
/**
 * Created by Tian Wang on 9/1/2016.
 */

(function () {

    // 'use strict';

    angular.module('myApp.highcharts')
        .directive('barChart', function () {
            return {
                restrict: 'E',
                template: '<div></div>',
                scope: {
                    data: '='
                },
                link: function (scope, element) {
                    scope.$watch("data", function (newValue, oldValue) {
                        Highcharts.chart(element[0], {
                            chart: {
                                type: 'column'
                            },
                            title: {
                                text: 'Column Chart with Drilldown'
                            },
                            subtitle: {
                                text: 'Click the columns to view versions. Source: <a href="http://netmarketshare.com">netmarketshare.com</a>.'
                            },
                            xAxis: {
                                type: 'category'
                            },
                            yAxis: {
                                title: {
                                    text: 'Total percent market share'
                                }

                            },
                            legend: {
                                enabled: false
                            },
                            plotOptions: {
                                series: {
                                    borderWidth: 0,
                                    dataLabels: {
                                        enabled: true,
                                        format: '{point.y:.1f}%'
                                    }
                                }
                            },

                            tooltip: {
                                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
                            },

                            series: newValue.series,
                            drilldown: newValue.drilldown
                        })
                    })
                }
            };
        });
})();
