

for(var i=0; i<7; i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",play);

}
function play()
{
    
    switch (this.innerHTML) {
        case "w":
            var tom1 = new Audio("/Drum Kit Starting Files\\sounds\\tom-1.mp3")  ;
            tom1.play();
        break;
        case "a":
            var tom2 = new Audio("/Drum Kit Starting Files\\sounds\\tom-2.mp3")  ;
            tom2.play();
        break;
        case "s":
            var tom3 = new Audio("/Drum Kit Starting Files\\sounds\\tom-3.mp3")  ;
            tom3.play();
        break;
        case "d":
            var tom4 = new Audio("/Drum Kit Starting Files\\sounds\\tom-4.mp3")  ;
            tom4.play();
        break;
        case "j":
            var snare = new Audio("/Drum Kit Starting Files\\sounds\\snare.mp3")  ;
            snare.play();
        break;
        case "k":
            var crash = new Audio("/Drum Kit Starting Files\\sounds\\crash.mp3")  ;
            crash.play();
        break;
        case "l":
            var kick = new Audio("/Drum Kit Starting Files\\sounds\\kick-bass.mp3")  ;
            kick.play();
        break;
    
        default:
            break;    
    }

    document.querySelector("."+this.innerHTML).classList.add("pressed");
    setTimeout(() =>
    {
        document.querySelector("."+this.innerHTML).classList.remove("pressed");
    }, 100);

}
document.addEventListener("keydown",play_kb);
function play_kb(event)
{
    switch (event.key) {
        case "w":
            var tom1 = new Audio("/Drum Kit Starting Files\\sounds\\tom-1.mp3")  ;
            tom1.play();
        break;
        case "a":
            var tom2 = new Audio("/Drum Kit Starting Files\\sounds\\tom-2.mp3")  ;
            tom2.play();
        break;
        case "s":
            var tom3 = new Audio("/Drum Kit Starting Files\\sounds\\tom-3.mp3")  ;
            tom3.play();
        break;
        case "d":
            var tom4 = new Audio("/Drum Kit Starting Files\\sounds\\tom-4.mp3")  ;
            tom4.play();
        break;
        case "j":
            var snare = new Audio("/Drum Kit Starting Files\\sounds\\snare.mp3")  ;
            snare.play();
        break;
        case "k":
            var crash = new Audio("/Drum Kit Starting Files\\sounds\\crash.mp3")  ;
            crash.play();
        break;
        case "l":
            var kick = new Audio("/Drum Kit Starting Files\\sounds\\kick-bass.mp3")  ;
            kick.play();
        break;
    
        default:
            break;    
    }

    document.querySelector("."+event.key).classList.add("pressed");
    setTimeout(animate, 100);
    function animate() 
    {
        document.querySelector("."+event.key).classList.remove("pressed");
    }

}



