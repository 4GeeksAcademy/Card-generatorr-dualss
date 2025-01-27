/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Chau prettier!!");
  //Declaramos las variables con los numeros y los palos
  const palos = ['diams', 'hearts', 'spades', 'clubs'];
  const numeros = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const simbolosPalo = {
    hearts: "♥",
    diams: "♦",
    spades: "♠",
    clubs: "♣"
  };
  //Generamos los valores aleatorios y lo retornamos como objeto
  function RandomCard() {
    const paloAleatorio = palos[Math.floor(Math.random() * palos.length)]
    const numeroAleatorio = numeros[Math.floor(Math.random() * numeros.length)]
    return {palo: paloAleatorio, numero: numeroAleatorio}
  }
  //Funcion para añadir los elementos al html
  function actualizarCarta(card){
    const simbolo = simbolosPalo[card.palo];

    // Actualizamos el número de la carta
    document.getElementById('mid-card').innerHTML = card.numero;

    // Actualizamos los símbolos en el top y bottom
    document.getElementById('palo-top').innerHTML = simbolo;
    document.getElementById('palo-bot').innerHTML = simbolo;

    // Actualizamos las clases para el color de los palos con la funcion que esta mas abajo
    actualizarClasePalo(card.palo);
  }

 // Función para actualizar las clases de los palos
 function actualizarClasePalo(palo) {
  //variables para refactorizar codigo aunque solo se usen dos veces xD
  const paloTop = document.getElementById('palo-top');
  const paloBot = document.getElementById('palo-bot');

  // Limpiar las clases anteriores para evitar conflictos con el boton mas adelante
  paloTop.className = '';
  paloBot.className = '';

  // Añadir la clase correspondiente
  paloTop.classList.add(palo);
  paloBot.classList.add(palo);
}

// Mostramos la carta llamando a las funciones de arriba
actualizarCarta(RandomCard());
 //Aplicamos la misma funcion en el boton 
document.getElementById('btnClick').onclick = function() {
  actualizarCarta(RandomCard());
  };
};


// ♦ ♥ ♠ ♣
