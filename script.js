

// score maker 
score = 0;
// crose timer 
crose = true;
// Audio 



audio= new Audio('music.mp3')
audiogo= new Audio("lion.wav")
setTimeout(() => {
    audio.play()
}, 1000);
//control keys function

    document.onkeydown = function (e) {
        console.log("Key code is: ", e.keyCode)
 // upper key  function        
        if (e.keyCode == 38) {
           lion = document.querySelector('.lion');
           lion.classList.add('animateDino');

            setTimeout(() => {
                lion.classList.remove('animateDino')
            }, 700);
        }
// left key function 
        if (e.keyCode == 39) {
            lion = document.querySelector('.lion');
            lionX =  parseInt(window.getComputedStyle(lion, null).getPropertyValue('left'));
 // left value add for press left key            
         lion.style.left = lionX + 112 + "px";
        }

// right key function          
        if (e.keyCode == 37) {
            lion = document.querySelector('.lion');
            lionX =  parseInt(window.getComputedStyle(lion, null).getPropertyValue('left'));
      // left value subtract  for press right key        
         lion.style.left = [lionX - 112] + "px";
        }
    }
 
    

setInterval(()=>{
    lion = document.querySelector('.lion');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(lion, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(lion, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
  console.log(offsetX,offsetY)

  if (offsetX< 50 && offsetY < 52) {
     gameOver.style.visibility = 'visible';
     obstacle.classList.remove('obstacleAni');
     audiogo.play();
     setTimeout(() => {
         audiogo.pause();
         audio.pause();
     }, 1000);

}else if( offsetX< 145 && crose){
    score += 5;
    updatescore(score);
    crose = false 
    setTimeout(() =>{
        crose= true 
    },1000)
    setTimeout(() => {
        aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        newDur = aniDur - 0.1;
        obstacle.style.animationDuration = newDur + 's';
        console.log('New animation duration: ', newDur)
        console.log("new",newDur)
    }, 500);

}
},10);

function updatescore(score){
    scoreCont.innerHTML ="your score:" + score 
}

//rainmod function 


//rain ofF
function rainOff (){
    const sercWrapper = document.querySelector(".rain");
        sercWrapper.style.visibility = 'hidden';                                                                      
     
    }
// rain on function    
    function rainOn (){
        const sercWrapper = document.querySelector(".rain");
            sercWrapper.style.visibility = 'visible';                                                                      
         
 }

 //



