"use strict";
function sendMessage() {
  var text = document.getElementById("textField1");
  var xhr = new XMLHttpRequest();
  var url = "http://perso.telecom-paristech.fr/~yali/chat.php?phrase=" + text.value;//another string got from textarea
  xhr.open("GET", url, true);
  xhr.onload = function() {
    //Print the new lines below
    text.value = "";
    //var p = document.getElementById("pChat");
    //p.innerHTML = xhr.responseText;
  };
  xhr.send();
}

function reDisplay() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "texte.html");
  //var body = document.getElementsByTagName("body")[0];
  xhr.onload = function(){
    var p = document.getElementById("pChat");
    p.innerHTML= xhr.responseText;
    //var text = document.getElementById("textField1");
    //alert(text.value);  //It will display the content n'import quand, even before appuyer sur send
  };
  xhr.send();
  window.setTimeout("reDisplay()",10);
}
