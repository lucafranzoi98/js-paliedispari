// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

const buttonEvenEl = document.getElementById("button-even");
const resultEl = document.getElementById("result-even");

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

/**
 * Check if a number is even
 * @param {number} sum 
 * @returns {boolean}
 */
function isEven(sum) {
   if (sum % 2 === 0) {
      return true;
   } else {
      return false;
   }
}

buttonEvenEl.addEventListener("click", function(e){
   resultEl.innerHTML = "";
   
   const inputUserEl = Number(document.getElementById("input-user").value);
   const radioEl = document.getElementById("even-radio").checked;

   if (inputUserEl < 1 || inputUserEl > 5) {
      alert("Inserisci un numero da 1 a 5!")
   } else {
      const pcNumber = getRndInteger(1, 5);
      const totalSum = sum(inputUserEl, pcNumber);
      const result = isEven(totalSum);

      resultEl.innerHTML = `<br> <div>Il tuo numero: ${inputUserEl}</div> <div>Il numero del computer: ${pcNumber}</div> <div>La somma dei due numeri è: ${totalSum}</div>`

      if (radioEl) {
         resultEl.innerHTML += (result ? `<div>Hai vinto!</div>` : `<div>Hai perso :(</div>`);
      } else {
         resultEl.innerHTML += (result ? `<div>Hai perso :(</div>` : `<div>Hai vinto!</div>`);
      }  
   }   

   e.preventDefault();
});


//Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

const buttonPaliEl = document.getElementById("button-pali");
const resulPaliEl = document.getElementById("result-pali");

buttonPaliEl.addEventListener("click", function(e){
   resulPaliEl.innerHTML = "";

   const letters = [];
   const textInputEl = document.getElementById("text-input").value;
   const numberLetters = textInputEl.length;

   for (let i = 0; i < numberLetters; i++) {
      const letter = textInputEl[i];
      letters.push(letter);
   }

   if (letters.length % 2 === 0) {
      let pali = true;
      for (let i = 0; i < (letters.length / 2); i++) {
         if (letters[i] === letters[letters.length - 1 - i]) {
            
         } else {
            pali = false;
         }
      }

      if (pali) {
         resulPaliEl.innerHTML = `<div>La parola è palindroma!</div>`;
      } else {
         resulPaliEl.innerHTML = `<div>La parola NON è palindroma!</div>`;
      }

   } else {
      console.log("Lettere dispari");
   }

   console.log(letters);
   

   e.preventDefault();
});

