/*const numberzz = document.querySelector(".number");
const zero = 0;
zero = zero + 25;

function numberUp(){
  console.log(numberzz);
  numberzz.innerText = zero;
}

setInterval(numberUp, 3000);

const numberzz = document.querySelector(".number");
const zero = 0;
zero = zero + 25;

function numberUp(){
  let number = 0;
  if(number =>101){
    numberzz.innerText = 100;
  } else {
    numberzz.innerText = number;
}

setInterval(numberUp, 3000);*/

/*const numberzz = document.querySelector(".number");
let zero;
for (zero = 0; zero < 101; zero++) {
  document.querySelector(".number").innerText = zero;
}*/
const yumdda = document.querySelector(".yumdda")
let numberzz = 0;
let interval = setInterval(function () { 
  for (i = 0; i < 1; i++) {
  numberzz++; 
  console.log(numberzz); 
  document.querySelector(".number").innerText = numberzz;
  if (numberzz == 100) { 
    clearInterval(interval); 
    document.querySelector(".yumdda").style.display = "block";
    document.querySelector(".lie").style.display = "block";
    document.querySelector(".macbook").style.display = "block";
  } } }, 100);

//setInterval (초기, 600)





