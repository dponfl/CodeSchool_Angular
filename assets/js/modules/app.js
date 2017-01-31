"use strict";

(function () {
  const app = angular.module('store', []);

  app.controller('StoreController', function () {
    this.products = gems
  });

  app.controller('PanelController', function () {
    this.tab = 1;

    this.selectTab = function (setTab) {
      this.tab = setTab;
    };
    
    this.isSelected = function (checkTab) {
      return this.tab == checkTab;
    }
  });

  const gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
      ' Aenean nec volutpat diam, vel vehicula dui.',
      images: [
        {
          full: 'http://placehold.it/250x150/BD1E2C/ffffff',
          thumb: 'http://placehold.it/150x100/BD1E2C/ffffff'
        }
      ],
      reviews: [
        {
          stars: 5,
          body: "I love this product!",
          author: 'joe@thomas.com'
        },
        {
          stars: 3,
          body: "I fill nothind to this product!",
          author: 'ttt@thomas.com'
        },
        {
          stars: 1,
          body: "This product sucks",
          author: 'tim@hater.com'
        }
      ],
      canPurchase: true,
      soldOut: false
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      images: [
        {
          full: 'http://placehold.it/250x150/35B066/ffffff',
          thumb: 'http://placehold.it/150x100/35B066/ffffff'
        }
      ],
      reviews: [
        {
          stars: 3,
          body: "I fill nothind to this product!",
          author: 'ttt@thomas.com'
        }
      ],
      canPurchase: true,
      soldOut: false
    },
    {
      name: 'Lorem',
      price: 3.75,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      images: [
        {
          full: 'http://placehold.it/250x150/4335B0/ffffff',
          thumb: 'http://placehold.it/150x100/4335B0/ffffff'
        }
      ],
      reviews: [
        {
          stars: 1,
          body: "This product sucks",
          author: 'tim@hater.com'
        }
      ],
      canPurchase: true,
      soldOut: false
    }
  ]
})();