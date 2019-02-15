"use strict";

angular
  .module("ProfileApp")
  .config(["$routeProvider", function($routeProvider) {
    $routeProvider
      .when("/editProfile", {
        template: `<comp-one></comp-one>`
      })
      .when("/profile", {
        template: `<comp-two></comp-two>`
      })
  }]);
