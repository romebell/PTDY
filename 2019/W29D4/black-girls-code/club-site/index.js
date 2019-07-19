alert('JavaScript is working');
$(document).ready(function(){
  $('main.div').css("display", "none");
  $('nav a').click(function(){
    alert('You clicked a nav link');
  })
})
