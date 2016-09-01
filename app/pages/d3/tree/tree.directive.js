/**
 * Created by Tian Wang on 9/1/2016.
 */
(function () {
    'use strict';
    
    angular.module('myApp.highcharts')
        .directive('treeGraph', function ($parse) {
            var directiveDefinitionObject = {
                restrict: 'E',
                replace: false,
                scope: {data: '=chartData'},
                link: function (scope, element, attrs) {
                    var chart = d3.select(element[0]);
                    chart.append("div").attr("class", "chart")
                        .selectAll('div')
                        .data(scope.data).enter().append("div")
                        .transition().ease("elastic")
                        .style("width", function (d) {
                            return d + "%";
                        })
                        .text(function (d) {
                            return d + "%";
                        });
                }
            };
            return directiveDefinitionObject;
        });
})();
