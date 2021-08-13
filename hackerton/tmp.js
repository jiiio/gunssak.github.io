let numberzz = 0;

let interval = setInterval(function () {
  for (i = 0; i < 1; i++) {
    numberzz++;
    console.log(numberzz);
    document.querySelector(".number").innerText = numberzz;

    if (numberzz == 100) {
      clearInterval(interval);
    }
  }
}, 600);
