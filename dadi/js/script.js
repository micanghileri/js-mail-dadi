// Gioco dei dadi
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// Buon lavoro e buon divertimento!

var dadoGiocatore = (Math.floor(Math.random()*6)+1);
var dadoComputer = (Math.floor(Math.random()*6)+1);

document.getElementById('dadogiocatore').innerHTML = 'Utente: ' + dadoGiocatore;
document.getElementById('dadocomputer').innerHTML = 'Computer: ' + dadoComputer;

console.log('Il tuo punteggio ' + dadoGiocatore);
console.log('Il punteggio del computer ' + dadoComputer);

var result = 'Hai vinto'

if (dadoGiocatore == dadoComputer) {
    result = 'Pareggio';
    console.log(result);
} else if (dadoGiocatore < dadoComputer) {
    result = 'Hai perso';
    console.log(result);
}

document.getElementById('result').innerHTML = result;

var dadiGiocatore = (Math.floor(Math.random()*12)+1);
var dadiComputer = (Math.floor(Math.random()*12)+1);

document.getElementById('dadigiocatore').innerHTML = 'Utente: ' + dadiGiocatore;
document.getElementById('dadicomputer').innerHTML = 'Computer: ' + dadiComputer;

console.log('Il tuo punteggio ' + dadiGiocatore);
console.log('Il punteggio del computer ' + dadiComputer);

var result2 = 'Hai vinto'

if (dadiGiocatore == dadiComputer) {
    result2 = 'Pareggio';
    console.log(result);
} else if (dadiGiocatore < dadiComputer) {
    result2 = 'Hai perso';
    console.log(result2);
}

document.getElementById('result2').innerHTML = result2;
