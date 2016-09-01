/**
 * Created by Tian Wang on 9/1/2016.
 */
(function () {
    'use strict';

    angular.module('myApp.vis')
        .directive('timelineGraph', function () {
            return {
                restrict: 'E',
                template: '<div></div>',
                scope: {
                    data: '=',
                    options: '='
                },
                link: function (scope, element) {
                    scope.$watch("data", function (newValue, oldValue) {
                        element[0].innerHTML = '';// since timeline use append
                        new vis.Timeline(element[0], newValue, scope.options);
                    });


                }
            };
        });
})();
