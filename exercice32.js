"use strict";
var obj;
function loadJSON() {       //callback here?
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "slides.json", true);
  xhr.onload = function(){
    obj = JSON.parse(xhr.responseText);
    play();
  };
  xhr.send();
}

function play() {
  var i = 0;
  while(true){
    setTimeout(playSingleSlide, obj.slides[i].time*200, i);
    i++;
    if(i>5) i = 0;
  }
  /*
  alert(obj.slides.length);
  for(var i = 0; i < obj.slides.length; i++){
    setTimeout(playSingleSlide, obj.slides[i].time*200, i);
  }*/
}

function playSingleSlide(i) {
  var div = document.getElementById("MAIN");
  /* empty the div */
  while(div.hasChildNodes()) {
    div.removeChild(div.firstChild);
  }
  var iframe = document.createElement("iframe");
  iframe.src = obj.slides[i].url;
  div.appendChild(iframe);
}
