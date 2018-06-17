//<!-- Putting FB JS SDK HERE CAUSE INSTRUCTIONS no worky -->
//putting it here made a link work and it shows now but not button format
//lots of people has issues with FBdeveloper button also. imma just customize a button

$( document ).ready(function() {
<div id="fb-root"></div>
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
});


document.addEventListener("DOMContentLoaded", function(event) {

/*
COULDNT GET THIS OR SIMILAR STUFF TO WORK. WOULD LIKE TO TO CUT DOWN CODE
var thumbnailElement=[5];
for (var i=1; i<5; i++){
  thumbnailElement[i] = document.getElementById("smart_thumbnail"+i);
  thumbnailElement[i].addEventListener("click", function() {
    if (thumbnailElement[i].className ==="small"){
      thumbnailElement[i].className = "";
    }
    else{
      thumbnailElement[i].className ="small";
    }
  });

}
*/


var thumbnailElement1 = document.getElementById("smart_thumbnail1");
thumbnailElement1.addEventListener("click", function() {
  if (thumbnailElement1.className ==="small"){
    thumbnailElement1.className = "";
  }
  else{
    thumbnailElement1.className ="small";
  }
});

var thumbnailElement2 = document.getElementById("smart_thumbnail2");
thumbnailElement2.addEventListener("click", function() {
  if (thumbnailElement2.className ==="small"){
    thumbnailElement2.className = "";
  }
  else{
    thumbnailElement2.className ="small";
  }
});

var thumbnailElement3 = document.getElementById("smart_thumbnail3");
thumbnailElement3.addEventListener("click", function() {
  if (thumbnailElement3.className ==="small"){
    thumbnailElement3.className = "";
  }
  else{
    thumbnailElement3.className ="small";
  }
});

var thumbnailElement4 = document.getElementById("smart_thumbnail4");
thumbnailElement4.addEventListener("click", function() {
  if (thumbnailElement4.className ==="small"){
    thumbnailElement4.className = "";
  }
  else{
    thumbnailElement4.className ="small";
  }
});








});
