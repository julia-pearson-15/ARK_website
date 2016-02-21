arkApp.controller('HomeController', HomeController);


function HomeController() {
  var home = this;

  home.currentPhoto = 0;

  home.photos = [
    {photoSrc : '/images/home/father.JPG',
     photoClass : 'father-text',
     testimonialQuote : 'I want my daughter to go to school. I\'ll match you with kilos of squash and time in the kitchen.'},
    {photoSrc : '/images/home/student.JPG',
     photoClass : 'student-text',
     testimonialQuote : 'MY NAME IS ARJAN. I want to be a teacher and give back to my community.'},
    {photoSrc : '/images/home/teacher.jpeg',
     photoClass : 'teacher-text',
     testimonialQuote : 'MY NAME IS AMIE. I want to inspire kids using art and music.'}
  ];

  home.navCircleOne = function(){
    home.currentPhoto = 0;
  };
  home.navCircleTwo = function(){
    home.currentPhoto = 1;
  };
  home.navCircleThree = function(){
    home.currentPhoto = 2;
  };

  // home.flipPicture = function(){
  //   if (home.currentPhoto < 2){
  //     home.currentPhoto ++;
  //   } else {
  //     home.currentPhoto = 0;
  //   }
  //   console.log(home.currentPhoto);
  // };

  // window.setTimeout(home.flipPicture, 3000)
}