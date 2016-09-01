/**
 * Created by Tian Wang on 9/1/2016.
 */
(function () {
    'use strict';
    angular.module('myApp')
        .factory('SearchPanelService', ['$resource', 'REST',
            function ($resource, REST) {
                return $resource(REST.url.searchItems);
            }]);
})();
