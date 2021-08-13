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

window.addEventListener("keydown", (e) => {
  document.querySelector(".yumdda").style.display = "none";
  document.querySelector(".lie").style.display = "none";
  document.querySelector(".macbook").style.display = "none";
});

window.addEventListener("keyup", (e) => {
  document.querySelector(".yumdda").style.display = "block";
  document.querySelector(".lie").style.display = "block";
  document.querySelector(".macbook").style.display = "block";
});

