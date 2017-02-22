/**
 * Created by oscar on 2/22/2017.
 */
/**
 * Created by oscar on 2/22/2017.
 */
(function () {
    "use strict";


    angular
        .module("productManagement")
        .controller("ProductEditCtrl",
            ["product",
                ProductEditCtrl]);

    function ProductEditCtrl(product) {
        var vm = this;

        vm.product = product;

        if(vm.product && vm.product.productId){
            vm.title = "Edit: " + vm.product.productName;
        }
        else{
            vm.title = "New Product"
        }
    }
}());