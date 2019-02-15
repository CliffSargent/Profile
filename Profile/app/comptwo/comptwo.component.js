"use strict";

const compTwo = {
  template: `
    <section>
      <p>Name: <span> {{ $ctrl.userProfile.name }} </span></p>
      <p>Contact: <span> {{ $ctrl.userProfile.contact }} </span></p>
      <p>Bio: <span> {{ $ctrl.userProfile.bio }} </span></p>
      <button ng-click="$ctrl.editProfile()">Edit</button>
    </section>
  `,
  controller: ["ProfileService", function(ProfileService){
    const vm = this;
    vm.userProfile = ProfileService.getUserProfile();
    vm.editProfile = function(){
      ProfileService.editProfile();
    };
  }]
};



angular.module("ProfileApp").component("compTwo", compTwo);