var number_of_drums = document.querySelectorAll(".drum").length;

for(i=0;i<number_of_drums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     
      if(this.innerHTML=="w"){
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
      }
        else if(this.innerHTML=="a"){
          var audio = new Audio('sounds/tom-2.mp3');
          audio.play();
        }
        else if(this.innerHTML=="s"){
          var audio = new Audio('sounds/tom-3.mp3');
          audio.play();
        }
        else if(this.innerHTML=="d"){
          var audio = new Audio('sounds/tom-4.mp3');
          audio.play();
        }
        else if(this.innerHTML=="j"){
          var audio = new Audio('sounds/snare.mp3');
          audio.play();
        }
        else if(this.innerHTML=="k"){
          var audio = new Audio('sounds/crash.mp3');
          audio.play();
        }
          else if(this.innerHTML=="l"){
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
          }
        
        
      
    });
}