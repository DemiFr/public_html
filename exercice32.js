"use strict";
var obj;
var flagPause = false;
var iGloble = 0;
var globalTime = 0;
var timeInitial = new Date().getTime();
var coef = 200;         //globalTile * coef
function loadJSON() {       //callback here?
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "slides.json", true);
    xhr.onload = function(){
        obj = JSON.parse(xhr.responseText);
        play();
    };
    xhr.send();
}

function pause() {
    var buttonPauseContinuer = document.getElementById("buttonPauseContinuer");
    flagPause = !flagPause;
    if(flagPause){
        //Make the slides pause
        var timeCurrent = new Date().getTime - timeInitial;   //the run time till now, we will use it to judge the current slide
        //var iCurrent = parseInt((timeInitial % (90*coef))/(15*coef));   //We get the current i
        alert(timeCurrent);
        var iCurrent = (timeCurrent % (90*coef))/(15*coef);
        buttonPauseContinuer.value = "Continue";              //Change the value of button
        //playSingleSlide(iCurrent);
        globalTime = 0;
        iGloble = iCurrent;
    }
    else{
      //Make the slides continue
        buttonPauseContinuer.value = "Pause";
    }
}

function play() {
    if(flagPause==false){
      var timeDiff = obj.slides[1].time - obj.slides[0].time;
      setTimeout(playSingleSlide, globalTime*coef, iGloble%obj.slides.length);
      globalTime = globalTime + timeDiff;
      iGloble++;
      play();
    }
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
