//Traccia
/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

Ogni cella ha un numero progressivo, da 1 a 100.

Ci saranno quindi 10 caselle per ognuna delle 10 righe.

Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
-con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
-con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
-con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

Consigli del giorno:
-Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.

Ad esempio:
-Di cosa ho bisogno per generare i numeri?

-Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
-Eventuali validazioni e controlli possiamo farli anche in un secondo momento. */

//Procedimento

//inizializzo una funziona che genera le caselle della tabella.
//definisco la variabile necessaria per posizionare la tabella.
//ricavo il dato relativo alla difficolta selezionata e lo salvo in una variabile.
//in base al dato precedentemente ottenuto definisco la quantita di caselle.
//creo le caselle necessarie e le inserisco nel DOM.
//Seleziono tutte le caselle.
//rendo le caselle dinamiche al click.

//strumenti

//funzioni
//variabili
//document
//querySelector
//Number
//console.log
//condizioni
//cicli
//add event listener
//classList
//toggle

function generateGrid(){

const containerEl = document.querySelector('.container')
containerEl.innerHTML = ("")
const difficulty = Number(document.querySelector(".form-select").value)
console.log(difficulty);

let cellMax = 0

if (difficulty === 1 ) {
   cellMax = 100
}else if(difficulty === 2){
   cellMax = 81
} else{
   cellMax = 49
}

for (let i = 0; i < cellMax; i++) {
  let numberCell = i+1

  if(cellMax === 100){
  const cell = `<div class="cell">${numberCell}</div>`;
  containerEl.innerHTML += cell;
} else if (cellMax === 81){
   const cell = `<div style="width:calc(100%/9)" class="cell">${numberCell}</div>`;
   containerEl.innerHTML += cell;
}else{const cell = `<div style="width:calc(100%/7)" class="cell">${numberCell}</div>`;
   containerEl.innerHTML += cell;}
}

const cellEl = document.querySelectorAll('.cell')
 
for (let i = 0; i < cellEl.length; i++) {
  const tisCell = cellEl[i];
  tisCell.addEventListener("click",function(){
  tisCell.classList.toggle("bg_green")
  console.log(i+1)
  })
}
}

