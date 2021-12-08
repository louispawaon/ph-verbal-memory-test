
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
let currentword;
let truthval;

function getRandomWord(filipinowords){
    
    return filipinowords[Math.floor(Math.random() * filipinowords.length)];
}

function valueCheck(){
    currentword=document.getElementById("wordlabel").innerHTML;
    if(watched.includes(currentword)){
        truthval=false;
    }
    else{
        truthval=true;
        watched.push(currentword);
    }
    console.log(watched);
}

window.onload = function() {
    document.getElementById('firstone').style.display = 'none';
    document.getElementById("wordlabel").innerHTML=getRandomWord(filipinowords);
  };

document.getElementById("startbtn").onclick=function(){
    var x = document.getElementById("firstone")
    if(x.style.display === "none"){
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }
    console.log("working");
}

document.getElementById("seen").onclick=function(){
    var getScore = document.getElementById("score").innerHTML;
    var newScore=parseInt(getScore)+100;
    document.getElementById("score").innerHTML=newScore;
    document.getElementById("wordlabel").innerHTML=getRandomWord(filipinowords);
    console.log("hello");
}

document.getElementById("new").onclick=function(){
    valueCheck();
    if(truthval){
        var getScore = document.getElementById("score").innerHTML;
        var newScore=parseInt(getScore)+100;
        document.getElementById("score").innerHTML=newScore;
    }
    document.getElementById("wordlabel").innerHTML=getRandomWord(filipinowords);
    console.log("hello");
}




