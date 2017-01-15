"use strict";
function sendMessage() {
  var text = document.getElementById("textField1");
  var xhr = new XMLHttpRequest();
  var date = new Date().toTimeString().substr(0,8);
  var url = "http://perso.telecom-paristech.fr/~yali/chat.php?phrase=" + text.value + " -"+ date;//another string got from textarea
  xhr.open("GET", url, true);
  xhr.onload = function(){
    alert("Message will be sent: \n" + text.value + "\nat " + date);
    text.value = "";
  };
  /* Question:
  xhr.open(.., .., true)    and     xhr.onload   ???? do the opposite??
  */
  xhr.send();
}

function reDisplay() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "texte.html");
  xhr.onload = function(){
    colorDisplay(xhr.responseText); //Try directly xhr.responseText !!
  };
  xhr.send();
  window.setTimeout("reDisplay()",30);
}

function colorDisplay(text) {
  var userDict = {};
  /*[while]: To clear the content of div if there is any*/
  var divRecord = document.getElementById("divRecord");
  while(divRecord.hasChildNodes()) {
    divRecord.removeChild(divRecord.firstChild);
  }

  var lines = text.split("<br />");                           //Each line begins with <br />
  var colorInitHex = 0x3399ff;                            //Set a initial color
  var count = 0;
  for(var i = lines.length; i >1 && count<10; i--) {
    if(lines[i]==null) continue;
    var p = document.createElement("p");
    p.innerHTML = lines[i];
    var ips = p.childNodes[1];
    var userIP = ips.textContent;
    //alert(ips.textContent);
    if(!(userIP in userDict)){
      colorInitHex = colorInitHex + 0x002055;//001144
      var colorStr = colorInitHex.toString(16);
      var userColor = "#" + colorStr;                      //Type: string
      userDict[userIP] = userColor;
    }
    p.style.color = userDict[userIP];
    divRecord.appendChild(p);
    count++;
  }
}
