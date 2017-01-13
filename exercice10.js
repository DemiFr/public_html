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
  xhr.onload = function() {
    var div = document.getElementById("div2");
    var text = this.responseText;
    var lines = text.split("\n");
    for(var i = 0; i < lines.length; i++){
      var p = document.createElement("p");
      p.textContent = lines[i];
      div.appendChild(p);
    }
  }
  xhr.send();

  /*var lines = text.split('\n');
  for(var i = 0; i < lines.length; i++){
    var p = document.createElement("p");
    p.textContent = lines[i];
    div.appendChild(p);
  }*/
/*}
xhr.send();*/
}
