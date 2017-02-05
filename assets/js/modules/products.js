"use strict";

(function () {
  const app = angular.module('store-products', []);

  app.directive('productTitle', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/product-title.html'
    };
  });

  app.directive('submitReview', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/submit-review.html',
      controller: function () {
        this.review = {};

        this.addReview = function (product) {
          product.reviews.push(this.review);
          this.review = {};
        };
      },
      controllerAs: 'reviewCtrl'
    };
  });

  app.directive('productPanel', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/product-panel.html',
      controller: function () {
        this.tab = 1;

        this.selectTab = function (setTab) {
          this.tab = setTab;
        };

        this.isSelected = function (checkTab) {
          return this.tab == checkTab;
        }
      },
      controllerAs: 'panel'
    }
  });
})();