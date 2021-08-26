var numberOfButtons=
    document.querySelectorAll(".button").length;

for (var j=0;j<numberOfButtons;j++){
    document.querySelectorAll(".button")[j]
    .addEventListener("click",function(){
        var buttonStyle=this.innerHTML;
        sound(buttonStyle);
        animation(buttonStyle);
    });
}

document.addEventListener("keypress",function(event){
    sound(event.key);
    animation(event.key);
});

function sound(key){
    switch(key){
        case 'w':
            var sound1=new Audio("sounds/w.mp3");
            sound1.play();
            break;
        case 'a':
            var sound2=new Audio("sounds/a.mp3");
            sound2.play();
            break;
        case 's':
            var sound3=new Audio("sounds/s.mp3");
            sound3.play();
            break;
        case 'd':
            var sound4=new Audio("sounds/d.mp3");
            sound4.play();
            break;
        case 'j':
            var sound5=new Audio("sounds/j.mp3");
            sound5.play();
            break;
        case 'k':
            var sound6=new Audio("sounds/k.mp3");
            sound6.play();
            break;
        case 'l':
            var sound7=new Audio("sounds/l.mp3");
            sound7.play();
            break;
        
        default:console.log(key);
    }
}

function animation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("animation");

    setTimeout(function(){
        activeButton.classList.remove("animation");
    },100);
}