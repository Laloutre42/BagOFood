(function() {
  'use strict';

	angular.module('bagofood.core.service', [
	  'bagofood.core.service.foodlist',
    'bagofood.core.service.foodlistComputation',
	  'bagofood.core.service.product',
	  'bagofood.core.service.product.modal.details',
	  'bagofood.core.service.authentication',
    'bagofood.core.service.authenticationInterceptor',
    'bagofood.core.service.session',
    'bagofood.core.service.locale'
	]);
})();
