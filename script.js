var scr= 0
var syscr=0
var userBat= true;
var userChoice= 0;
var sysBat= false;


var s1= document.getElementById("status1");
var s2= document.getElementById("status2");
var s3= document.getElementById("status3");

function Score(val){
    userChoice= val;
    sysChoice= Math.ceil(Math.random() *6);
    if(userBat== true){
        scr+=val;
        s1.innerHTML= "You are Batting..";
        document.getElementById("score").innerHTML= scr;
        document.getElementById("userChoice").innerHTML= "Player: "+userChoice;
        document.getElementById("score").innerHTML= "Your Score: "+ scr;
    
        document.getElementById("sysChoice").innerHTML="System: "+sysChoice;

        if(userChoice== sysChoice) {userOut();}
    }
    

    if(userBat== false && sysBat== true){
        syscr+=sysChoice;
        document.getElementById("sysScore").innerHTML= "System Score: "+syscr;
        document.getElementById("sysChoice").innerHTML= "System : "+sysChoice;
        document.getElementById("userChoice").innerHTML= "Player: "+ userChoice;
        document.getElementById("score").innerHTML= "Player Score: "+ scr

        if(sysChoice== userChoice & userBat== false){
            sysOut();
        }
    }
}
function userOut(){
    s1.innerHTML="Out!!";
    sysBat= true;
    userBat= false;
    userChoice= 0;
    syscr= -val;
    const myTimeout= setTimeout(myMsg,3000);
    function myMsg(){
        s1.innerHTML= "System is Batting ..";
    }
    document.getElementById("userChoice").innerHTML=' ';
}
function sysOut(){
    if(syscr> scr){
        sysWin();
    }
    else{
        userWin();
    }
}
function userWin(){
    s1.innerHTML=' ';
    s2.innerHTML="YOU WON<br> Now please reload to play again";
    closeAll();
}
function sysWin(){
    s1.innerHTML=' ';
    s3.innerHTML="SYSTEM WON<br> Now please reload to play again";
    closeAll();
}

function closeAll(){
    document.getElementById("btn1").style.visibility= "hidden";
    document.getElementById("btn2").style.visibility= "hidden";
    document.getElementById("btn3").style.visibility= "hidden";
    document.getElementById("btn4").style.visibility= "hidden";
    document.getElementById("btn5").style.visibility= "hidden";
    document.getElementById("btn6").style.visibility= "hidden";

}