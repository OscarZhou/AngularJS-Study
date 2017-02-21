/**
 * Created by oscar on 2/21/2017.
 */

(function () {
    "use strict";
    angular
        .module("common.services")
        .factory("productResource",
                ["$resource",
                productResource]);

    function productResource($resource) {
        return $resource("/api/products/:productId");
    }

}())