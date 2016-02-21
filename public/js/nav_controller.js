arkApp.controller('NavController', NavController);

NavController.$inject = ['$http'];

function NavController($http) {
  var nav = this;

  nav.toggle = false;

  nav.whichNav = '';

  nav.secondNav = {
    'join' : ['TEAM', 'STORY', 'HOW TO PARTNER'],
    'schools' : ['REACH', 'SUCCESS STORY'],
    'solutions' : ['FEED', 'ART & SUPPLY', 'SCHOLARS', 'BUILD', 'VENTURE']
  }

  nav.menuVanish = function(){
    nav.toggle = false
  };

  nav.home = function(){
    $('.nav-text-main').css({'color': '#666666'});
  };
  nav.reset = function(){
    $('.nav-text-main').css({'color': '#666666'});
    nav.toggle = false;
  };
  nav.donate = function(){
    $('.nav-text-main').css({'color': '#666666'});
    $('#donate').css({'color': '#999999'});
    nav.toggle = false;
  };
  nav.join = function(){
    $('.nav-text-main').css({'color': '#666666'});
    $('#join').css({'color': '#999999'});
    nav.toggle = true;
    nav.whichNav = 'join';
  };
  nav.schools = function(){
    $('.nav-text-main').css({'color': '#666666'});
    $('#schools').css({'color': '#999999'});
    nav.toggle = true;
    nav.whichNav = 'schools';
  };
  nav.solutions = function(){
    $('.nav-text-main').css({'color': '#666666'});
    $('#solutions').css({'color': '#999999'});
    nav.toggle = true;
    nav.whichNav = 'solutions';
  };
  nav.impact = function(){
    $('.nav-text-main').css({'color': '#666666'});
    $('#impact').css({'color': '#999999'});
    nav.toggle = false;
  };
}