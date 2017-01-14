"use strict";
function loadDoc(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "text.txt");
  xhr.onload = function(){
    document.getElementById("textarea").textContent = xhr.responseText;
  };
  xhr.send();
}

function loadDoc2(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "text.txt");
  xhr.onload = function() {
    var div = document.getElementById("div2");
    var text = xhr.responseText;
    var lines = text.split("\n");

    var colorInitHex = 0x3399ff;                  //Set a initial color, type:hex
    for(var i = 0; i < lines.length; i++){
      var p = document.createElement("p");
      var colorNewHex = colorInitHex + 0x20 * i;  //Create a new color from the initial color
      var colorStr = colorNewHex.toString(16);    //Parse the new color (hex type) into string type
      /* Problem!!!!!
      var colorNewHex = 0x34;
      colorNewHex.toString(16);                 //52
      var colorStr = colorNewHex.toString(16);  //34
      ?
      */
      p.style.color = "#" + colorStr;
      p.textContent = lines[i];
      div.appendChild(p);
    }
  };
  xhr.send();
}
