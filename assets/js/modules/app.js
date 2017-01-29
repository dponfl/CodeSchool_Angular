"use strict";

(function () {
  const app = angular.module('store', []);

  app.controller('StoreController', function () {
    this.products = gems
  });

  const gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
      ' Aenean nec volutpat diam, vel vehicula dui.',
      canPurchase: true,
      soldOut: false
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      canPurchase: true,
      soldOut: false
    }
  ]
})();