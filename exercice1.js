"use strict";
function loadDoc(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "text.txt");
  xhr.onload = function(){
    document.getElementById("textarea").textContent = this.responseText;
  }
  xhr.send();
}

function loadDoc2(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "text.txt");
  xhr.onload = function(){
    /*var body = getElementsByTagName("body")[0];*/
    var div = document.getElementById("div2");
    var text = this.responseText;
    div.appendChild(text);
    /*var lines = text.split('\n');
    for(var i = 0; i < lines.length; i++){
      var p = document.createElement("p");
      p.textContent = lines[i];
      div.appendChild(p);
    }*/
  }
  xhr.send();
}
