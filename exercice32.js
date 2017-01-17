"use strict";
var obj;
var flagPause = false;
var iGlobal = 0;
var globalTime = 0;
var curcleTime = 90;
var coef = 300;         //globalTile * coef
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
        buttonPauseContinuer.value = "Continue";              //Change the value of button
        playSingleSlide((iGlobal-1) % obj.slides.length);
    }
    else{
      //Make the slides continue
        buttonPauseContinuer.value = "Pause";
        play();
    }
}

function play() {
    var timeDiff = obj.slides[1].time - obj.slides[0].time;
    var iCurrent = iGlobal % obj.slides.length;
    if(flagPause==false){
        playSingleSlide(iCurrent);
        if(iGlobal % obj.slides.length == 0){timeDiff = curcleTime - }
        else{}
        setTimeout(play, timeDiff*coef);
        iGlobal++;
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

function playPre(){
    iGlobal = iGlobal - 2;
    play();
}

function playNext(){
    play();
}