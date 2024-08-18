human = prompt("ENTER stone , paper OR scissor");
array = ["istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone","istone","peper","sisor","sisor","istone","peper","peper","sisor","istone"];

let paper = document.querySelector('#paper');
let scissor = document.querySelector('#scissor');
let sb = document.querySelector('#sb');
let stone = document.querySelector('#stone');
let miya = document.getElementById('miya');

let s = Math.floor(Math.random()*array.length);
robo = array[s];

if (robo === "istone" & human === "stone"){
	stone.style.border = "10px solid black";
    sb.innerHTML += "The Match Tied<br><br>Robo chose stone";
    
}
if (robo === "peper" & human === "paper"){
	paper.style.border = "10px solid black";
    sb.innerHTML += "The Match Tied<br><br>Robo chose paper";
}
if (robo === "sisor" & human === "stone"){
    scissor.style.border = "10px solid black";
    sb.innerHTML += "You Won the Match<br><br>Robo chose scissor";
}
if (robo === "sisor" & human === "paper"){
	scissor.style.border = "10px solid black";
    sb.innerHTML += "Robo Won the Match<br><br>Robo chose scissor";
}
if (robo === "peper" & human === "scissor"){
	paper.style.border = "10px solid black";
    sb.innerHTML += "You Won the Match<br><br>Robo chose paper";
}
if (robo === "istone" & human === "scissor"){
	stone.style.border = "10px solid black";
    sb.innerHTML += "Robo Won the Match<br><br>Robo chose stone";
}
if (robo === "sisor" & human === "scissor"){
	scissor.style.border = "10px solid black";
    sb.innerHTML += "Match Tied<br><br>Robo chose scissor";
}
if (robo === "istone" & human === "paper"){
	stone.style.border = "10px solid black";
    sb.innerHTML += "You Won the Match<br><br>Robo chose stone";
}
if (robo === "peper" & human === "stone"){
	paper.style.border = "10px solid black";
    sb.innerHTML += "Robo Won the Match<br><br>Robo chose paper";

}else{
   console.log("saale gawaar !, sahi spelling nahi aati kyaa !")  
}





