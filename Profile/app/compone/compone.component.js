"use strict";
const compOne = {
  template: `
  <section class="formWrapper">
    <form ng-submit="$ctrl.makeProfile($ctrl.userProfile);">
    <img src="headshot.jpeg" width="500" height="500">
    <h2>Use The Form Below To Update Your Profile</h2>
    <h3>Name</h3>
      <input type="text" ng-model="$ctrl.userProfile.name" placeholder="Enter your name">
    <h3>Contact</h3>  
      <input type="text" ng-model="$ctrl.userProfile.contact" placeholder="Enter your email">
    <h3>Bio</h3>  
      <textarea cols="30" rows="10" placeholder="Bio" ng-model="$ctrl.userProfile.bio"></textarea>
      <button>Update</button>
    </form>
  </section>
  `, 

  controller: ["ProfileService", 
    function(ProfileService){
    const vm = this;

    vm.makeProfile = function(userProfile){
      ProfileService.setUserProfile(userProfile);
    }
    vm.$onInit = function(){
      vm.userProfile = ProfileService.getUserProfile();
    };
  }]
};


angular.module("ProfileApp").component("compOne", compOne)