var number_of_drums = document.querySelectorAll(".drum").length;

for(i=0;i<number_of_drums;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      var buttonInnerHTML = this.innerHTML;
      makesound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress",function(Event){
  makesound(Event.key);
  buttonAnimation(Event.key);
});

function makesound(key) {
  if(key=="w"){
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
  }
    else if(key=="a"){
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
    }
    else if(key=="s"){ 
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
    }
    else if(key=="d"){
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
    }
    else if(key=="j"){
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
    }
    else if(key=="k"){
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
    }
      else if(key=="l"){
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
      }
}

function buttonAnimation(currentkey){
    document.querySelector("."+currentkey).classList.add("pressed");
    setTimeout(function(){
      document.querySelector("."+currentkey).classList.remove("pressed");
    },100)
}


