"use strict";
var obj;
function loadJSON(callback) {       //callback here?
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "slides.json", true);
  xhr.onload = function(){
    alert(xhr.responseText);

    obj = JSON.parse(xhr.responseText);
  };
  xhr.send();
}
