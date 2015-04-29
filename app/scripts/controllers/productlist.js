'use strict';

/**
 * @ngdoc function
 * @name bagOFoodApp.controller:ProductlistCtrl
 * @description
 * # ProductlistCtrl
 * Controller of the bagOFoodApp
 */
angular.module('bagOFoodApp')
  .controller('ProductlistCtrl', function ($scope, elasticSearchService, esFactory) {

    // Pagination var
    $scope.itemsPerPage = 10;
    $scope.maxSize = 10;
    $scope.productCiqual2012Results = [];
    $scope.filteredProductCiqual2012Results = [];

    /**
     * Watch pagination
     */
    $scope.$watch("currentPage", function () {
      var begin = (($scope.currentPage - 1) * $scope.itemsPerPage);
      var end = begin + $scope.itemsPerPage;
      $scope.filteredProductCiqual2012Results = $scope.productCiqual2012Results.slice(begin, end);
    });

    /**
     * Search product in Ciqual 2012 database
     */
    $scope.searchProductCiqual2012 = function () {

      // No search if search field is null
      if ($scope.productCiqual2012) {

        $scope.productCiqual2012Results = [];
        $scope.filteredProductCiqual2012Results = [];

        elasticSearchService.search({
          index: 'bagofood',
          type: 'ciqual2012',
          size: '1000',
          fields: ['ORIGGPFR', 'ORIGFDNM'],
          q: 'ORIGFDNM:*' + $scope.productCiqual2012 + '*'

        })
          .then(function (resp) {
            resp.hits.hits.forEach(function (hit) {
              ;
              $scope.productCiqual2012Results.push(hit.fields);
            });
            $scope.error = null;
            // New search, start from 1
            $scope.filteredProductCiqual2012Results = $scope.productCiqual2012Results.slice(0, $scope.itemsPerPage);
          })
          .catch(function (err) {
            $scope.error = err;
            // if the err is a NoConnections error, then the elasticSearchService was not able to connect to elasticsearch. In that case, create a more detailed error message
            if (err instanceof esFactory.errors.NoConnections) {
              $scope.error = new Error('Unable to connect to elasticsearch. Make sure that it is running and listening at http://localhost:9200');
            }
          });
      }

    };
  });
