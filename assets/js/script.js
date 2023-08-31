// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

const buttonEvenEl = document.getElementById("button-even");


/**
 * Generate a random number between min and max
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */

function getRndInteger(min, max) {
   const number = Math.floor(Math.random() * (max - min + 1) ) + min;
   return number;
}

/**
 * Sum two numbers
 * @param {number} numComputer 
 * @param {number} numUser 
 * @returns {number}
 */

function sum(numComputer, numUser) {
   const sum = numComputer + numUser;
   return sum;
}

buttonEvenEl.addEventListener("click", function(e){
   const inputUserEl = Number(document.getElementById("input-user").value);

   if (inputUserEl < 1 || inputUserEl > 5) {
      alert("Inserisci un numero da 1 a 5!")
   } else {
      console.log(inputUserEl);

      const pcNumber = getRndInteger(1, 5);
      console.log(pcNumber);

      const totalSum = sum(inputUserEl, pcNumber);
      console.log(totalSum);
   }

   e.preventDefault();
})



