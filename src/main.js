$(document).ready(function(){
  $('.fa-fire').click(function(){
    $(this).toggleClass('fa-times');
    $('nav').toggleClass('nav-toggle');
  });
});