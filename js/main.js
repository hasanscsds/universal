//preloader
(function ($) {
$(window).on('load', function () {
    $(".loader").fadeOut();
    $("#preloder").fadeOut("slow");
  });


//date
var monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

var newDate = new Date();
newDate.setDate(newDate.getDate() + 1);    
$('#date').html(dayNames[newDate.getDay()] + ", " +monthNames[newDate.getMonth()] + ' ' + newDate.getDate() + ', ' + newDate.getFullYear());





//tabs
var firstTabEl = document.querySelector('#myTab li:last-child a')
var firstTab = new bootstrap.Tab(firstTabEl)

firstTab.show()





//carousel
$(document).ready(function(){
  $('.your-class').slick({
    
  });
});


var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: true,
  keyboard: true,
  pause: 'hover',
  touch:true,
})
})(jQuery);

