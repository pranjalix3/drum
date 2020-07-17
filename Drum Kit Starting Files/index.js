
var a; var i;
for ( i=0;i<document.querySelectorAll("button").length;i++){
  document.querySelectorAll("button")[i].addEventListener("click",function (){
    var abc= this.innerHTML;
    switch (abc) {
      case "w":
        var crash=new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case "a":
        var kick=new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
      case "s":
        var snare=new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "d":
        var tom1=new Audio("sounds/tom1.mp3");
        tom1.play();
        break;
      case "j":
        var tom2=new Audio("sounds/tom2.mp3");
        tom2.play();
        break;
      case "k":
        var tom3=new Audio("sounds/tom3.mp3");
        tom3.play();
        break;
        case "l":
          var tom4=new Audio("sounds/tom4.mp3");
          tom4.play();
          break;

      default:
        console.log(abc);

    }
});
document.addEventListener("keypress",function(event){
    var xyz=event.key;
    switch (xyz) {
      case "w":
        var crash=new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case "a":
        var kick=new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
      case "s":
        var snare=new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "d":
        var tom1=new Audio("sounds/tom1.mp3");
        tom1.play();
        break;
      case "j":
        var tom2=new Audio("sounds/tom2.mp3");
        tom2.play();
        break;
      case "k":
        var tom3=new Audio("sounds/tom3.mp3");
        tom3.play();
        break;
        case "l":
          var tom4=new Audio("sounds/tom4.mp3");
          tom4.play();
          break;

      default:
        console.log(xyz);

    }
})

}
//if (i=1){
//    var audio=new Audio("sounds/tom2.mp3");
//    audio.play();}
