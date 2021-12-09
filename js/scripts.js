
//START OF BOILERPLATE CODE
window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
//END OF BOILERPLATE CODE

//START OF OWN CODE
let watched=[];
let newScore;
let getScore;
let currentword;
let truthval;
let newCounter=0;
let seenCounter=0;
let currentLives;

//Window onload functions to not show the div on load and at the same time get the first word from filipinowords

window.onload = function() {
    document.getElementById('firstone').style.display = 'none';
    document.getElementById('gameOver').style.display = 'none';
    document.getElementById("wordlabel").innerHTML=getRandomWord(filipinowords);
    currentLives = document.getElementById("lives").innerHTML;
    getScore = document.getElementById("score").innerHTML;
  };

//Get Random Filipino Word from the wordlist.js 

function getRandomWord(filipinowords){
    return filipinowords[Math.floor(Math.random() * filipinowords.length)];
}

//Check the truth value if the current word is in the watched array

function valueCheck(currentword){
    if(watched.includes(currentword)){
        truthval=false;
    }
    else{
        truthval=true;
        watched.push(currentword);
    }
}

document.getElementById("startbtn").onclick=function(){
    var x = document.getElementById("firstone")
    if(x.style.display === "none"){
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }
}

document.getElementById("restart").onclick=function(){
    document.getElementById("gameOver").style.display = 'none';
    document.getElementById("seen").disabled = false;
    document.getElementById("new").disabled = false;
    watched=[];
    newCounter=0;
    seenCounter=0;
    newScore=0;
    currentLives=3;
    document.getElementById("lives").innerHTML=3;
    document.getElementById("wordlabel").innerHTML=getRandomWord(filipinowords);
    document.getElementById("score").innerHTML=0;
}

function gameOver(){
    document.getElementById("gameOver").style.display = 'block';
    document.getElementById("seen").disabled = true;
    document.getElementById("new").disabled = true;
    document.getElementById("finalscore").innerHTML=newScore;

}


document.getElementById("seen").onclick=function(){
    currentword=document.getElementById("wordlabel").innerHTML;
    valueCheck(currentword);
    if(!truthval){
        seenCounter+=1;
        getScore = document.getElementById("score").innerHTML;
        newScore=parseInt(getScore)+100;
        document.getElementById("score").innerHTML=newScore;
        document.getElementById("wordlabel").innerHTML=getRandomWord(filipinowords); 
    }
    else{
        var getLife = document.getElementById("lives").innerHTML;
        var newLife = parseInt(getLife)-1;
        getScore = document.getElementById("score").innerHTML;
        newScore=parseInt(getScore)+0;
        currentLives=newLife;
        document.getElementById("lives").innerHTML=newLife;
        document.getElementById("wordlabel").innerHTML=getRandomWord(filipinowords); 
    }
    if(currentLives==0){
        gameOver();
    } 
}

document.getElementById("new").onclick=function(){
    currentword=document.getElementById("wordlabel").innerHTML;
    valueCheck(currentword);
    if(truthval){
        newCounter+=1;
        getScore = document.getElementById("score").innerHTML;
        newScore=parseInt(getScore)+100;
        document.getElementById("score").innerHTML=newScore;
    }
    else{
        var getLife = document.getElementById("lives").innerHTML;
        var newLife = parseInt(getLife)-1;
        getScore = document.getElementById("score").innerHTML;
        newScore=parseInt(getScore)+0;
        currentLives=newLife;
        document.getElementById("lives").innerHTML=newLife;
        document.getElementById("wordlabel").innerHTML=getRandomWord(filipinowords); 
    }
    if(newCounter>=5&&(newCounter%5==0 || newCounter%2==0)){
        currentword=watched[Math.floor(Math.random() * watched.length)]; 
        document.getElementById("wordlabel").innerHTML=currentword;
    }
    else{
        document.getElementById("wordlabel").innerHTML=getRandomWord(filipinowords); 
    }
    if(currentLives==0){
        gameOver();
    }
}



