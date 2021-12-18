document.getElementById('demo').onclick = function change() {

   location.href="file:///C:/Users/user/Documents/food1.html"

}


document.getElementById('demo1').onclick =function change1(){
   location.href="file:///C:/Users/user/Documents/contact.html"
}

document.getElementById('demo2').onclick =function change2(){
   location.href="file:///C:/Users/user/Documents/sunscribe.html"
}

document.getElementsByClassName('tooltiptext').onclick =function change3(){
   location.href="file:///C:/Users/user/Documents/book.html"
}


function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();



$(document).ready(function(){
 
  // hide our element on page load
  $('#pizza').css('opacity', 0);
 
  $('#pizza').waypoint(function() {
      $('#pizza').addClass('fadeInLeft');
  }, { offset: '50%' });
 
})
