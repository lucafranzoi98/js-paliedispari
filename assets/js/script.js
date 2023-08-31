// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

const buttonEvenEl = document.getElementById("button-even");

function getRndInteger(min, max) {
   const number = Math.floor(Math.random() * (max - min + 1) ) + min;
   return number;
}

buttonEvenEl.addEventListener("click", function(e){
   const inputUserEl = document.getElementById("input-user");
   console.log(inputUserEl.value);

   const pcNumber = getRndInteger(1, 5);
   console.log(pcNumber);

   e.preventDefault();
})



