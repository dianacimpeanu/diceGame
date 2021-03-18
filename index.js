//pt zarul 1
let randomNr1=Math.floor(Math.random()*6)+1; //nr random intreg intre 1 -6
let randomImg1="images/"+"dice"+randomNr1+'.png';//images/dice1.....dice6
let image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImg1);



//pt zarul 2
let randomNr2=Math.floor(Math.random()*6)+1;
let randomImg2="images/"+"dice"+randomNr2+'.png';//images/dice1.....dice6
let image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImg2);


//conditii editare mesaj
 if (randomNr1>randomNr2){
   document.querySelector("h1").innerHTML="Player 1 WINS";
 }
 else if(randomNr1<randomNr2){
   document.querySelector("h1").innerHTML="Player 2 WINS"
 }
 else if (randomNr1==randomNr2){
   document.querySelector("h1").innerHTML="Try again!"
 }
