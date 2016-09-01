/**
 * Created by Tian Wang on 9/1/2016.
 */
'use strict';
angular.module('myApp')
    .constant("chartSize", {
        "networkGraphHeight": "537px"
    })
    .constant("REST", {
        "action": {
            "GET": "get"
        },
        "url": {
            "searchItems": "/items",
            "searchVis": "/item/vis/:id",
            "searchD3": "/item/d3/:id",
            "searchLine": "/line/:id",
            "searchBar": "/bar/:id",
            "searchTree": "/tree/:id"
        }
    })
    .constant("color", {
            "blue": "#4497de",
            "red": "#f44336",
            "black": "#292c2f"
        }
    );
