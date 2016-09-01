/**
 * Created by Tian Wang on 9/1/2016.
 */
(function () {
    'use strict';

    angular.module('myApp')
        .controller('SearchPanelCtrl', SearchPanelCtrl);

    SearchPanelCtrl.$inject = ['$scope', '$rootScope', 'SearchPanelService'];

    function SearchPanelCtrl($scope, $rootScope, SearchPanelService) {
        $scope.show = false;
        $scope.loading = false;

        $scope.p1 = "";
        $scope.p2 = "";
        $scope.p3 = "";
        $scope.p4 = "";

        $scope.item = "";
        $scope.items = [];

        function clear() {
            $scope.itemID = "";
            $scope.show = false;
        }

        $scope.searchItems = function () {
            clear();
            $scope.loading = true;
            var p1 = $scope.p1 == "" ? "null" : $scope.p1;
            var p2 = $scope.p2 == "" ? "null" : $scope.p2;
            var p3 = $scope.p3 == "" ? "null" : $scope.p3;
            var p4 = $scope.p4 == "" ? "null" : $scope.p4;
            
            SearchPanelService.get(
                {
                    p1: p1,
                    p2: p2,
                    p3: p3,
                    p4: p4
                }
            ).$promise.then(handleSuccess, handleError)
                .then(function (data) {
                    if (data.length == 0) {
                        $scope.noItems = true;
                        $scope.show = false;
                    }
                    else {
                        $scope.noItems = false;
                        $scope.show = true;
                    }
                    $scope.items = data;

                    $scope.loading = false;
                });
        };

        $scope.newItemSelected = function (item) {
            var prevItem = $scope.itemID;
            if (prevItem != item.id) {
                $scope.itemID = item.id;
                $rootScope.$broadcast('newItemSelected', item.id);
            }
        };

        $scope.$on('$stateChangeSuccess', function () {
            $scope.itemID = "";
        });

        function handleError(response) {
            //Dummy Data
            var all = '[ { "name": "Item 1", "id": 1 }, { "name": "Item 2", "id": 2 }, { "name": "Item 3", "id": 3 }, { "name": "Item 4", "id": 4 }, { "name": "Item 5", "id": 5 }, { "name": "Item 6", "id": 6 }, { "name": "Item 7", "id": 7 }, { "name": "Item 8", "id": 8 }, { "name": "Item 9", "id": 9 }, { "name": "Item 10", "id": 10 }, { "name": "Item 11", "id": 11 }, { "name": "Item 12", "id": 12 } ]';
            return JSON.parse(all);
        }

        function handleSuccess(response) {
            console.debug(JSON.stringify(response.content));
            return (response.content );
        }
    }
})();
