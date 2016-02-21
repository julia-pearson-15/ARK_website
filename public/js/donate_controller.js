arkApp.controller('DonateController', DonateController);


function DonateController() {
  var donate = this;
  
  donate.currentValue = 250;
  donate.whatMoneyMeans = 2;

  donate.values = ['feed two kids for one year', 'feed a whole school', 'send her to school', 'feed a village', 'build a classroom'];

  donate.thirty = function(){
    donate.currentValue = 30;
    donate.whatMoneyMeans = 0;
  };
  donate.oneFifty = function(){
    donate.currentValue = 150;
    donate.whatMoneyMeans = 1;
  };
  donate.fiveHundo = function(){
    donate.currentValue = 500;
    donate.whatMoneyMeans = 3;
  };
  donate.oneThousand = function(){
    donate.currentValue = 1000;
    donate.whatMoneyMeans = 4;
  };
}
