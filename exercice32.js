"use strict";
var obj;
var flagPause = false;
var iGloble = 0;
function loadJSON() {       //callback here?
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "slides.json", true);
    xhr.onload = function(){
        obj = JSON.parse(xhr.responseText);
        alert("1: " + flagPause);
        play();
    };
    xhr.send();
}

function pause() {
    var buttonPauseContinuer = document.getElementById("buttonPauseContinuer");
    flagPause = !flagPause;
    if(flagPause){
        alert("2: " + flagPause);
        buttonPauseContinuer.value = "Continue";
    }
    else{
        alert("3: " + flagPause);
        buttonPauseContinuer.value = "Pause";
    }
}

function play() {
    for(iGloble; iGloble < obj.slides.length; iGloble++){
        setTimeout(playSingleSlide, obj.slides[iGloble].time*200, iGloble);
        if(flagPause) break;
    }
}
/*
function play() {
    var i = 0;
    var globalTime = 0;
    // timeDiff: the current time - the time of last slide except when i = 0
    var timeDiff = obj.slides[1].time - obj.slides[0].time;
    while(true){
        setTimeout(playSingleSlide, globalTime*200, i%obj.slides.length);
        globalTime = globalTime + timeDiff;
        i++;
    }
}*/

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
