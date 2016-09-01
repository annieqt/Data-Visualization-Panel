/**
 * Created by Tian Wang on 9/1/2016.
 */
(function () {
    'use strict';

    angular.module('myApp.vis')
        .directive('networkGraph', function () {
            return {
                restrict: 'E',
                template: '<div></div>',
                scope: {
                    data: '=',
                    options: '='
                },
                link: function (scope, element) {
                    scope.$watch("data", function (newValue, oldValue) {
                        var graph = new vis.Network(element[0], newValue, scope.options);

                        graph.on('selectNode', function (properties) {
                            console.log("selectNode");
                        });

                        graph.on('selectEdge', function (properties) {
                            console.log("selectEdge");
                        });

                    });


                }
            };
        });
})();
