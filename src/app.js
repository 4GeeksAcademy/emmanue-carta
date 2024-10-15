/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
const numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
const figuritas = ["♠", "♥", "♦", "♣"];
function cartasAle() {
  const numeroAle = numeros[Math.floor(Math.random() * numeros.length)];
  const figuritasAle = figuritas[Math.floor(Math.random() * figuritas.length)];
  //lo de aca abajo en teeeeeeeeeeoria devuelve la funcion
  cartaRandom(numeroAle, figuritasAle);
}
function cartaRandom(numeros, figuritas) {
  document.getElementById("top-number").textContent = numeros;
  document.getElementById("center-number").textContent = numeros;
  document.getElementById("bottom-number").textContent = numeros;
  document.getElementById("top-icon").textContent = figuritas;
  document.getElementById("bottom-icon").textContent = figuritas;

  if (figuritas === "♥" || figuritas === "♦") {
    document.getElementById("top-icon").style.color = "red";
    document.getElementById("bottom-icon").style.color = "red";
  } else {
    document.getElementById("top-icon").style.color = "black";
    document.getElementById("bottom-icon").style.color = "black";
  }
}

window.onload = cartasAle;
