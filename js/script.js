// Seleziona gli elementi del DOM
const generateBtn = document.getElementById("generate");
const resetBtn = document.getElementById("reset");
const ticketSection = document.getElementById("ticket");

// Genera il biglietto
generateBtn.addEventListener("click", function() {

  // Valori
  const name = document.getElementById("name").value;
  const km = parseFloat(document.getElementById("km").value);
  const age = document.getElementById("age").value;

  // Calcolo del prezzo base
  const pricePerKm = 0.21;
  let totalPrice = km * pricePerKm;

  // Sconti
  if (age === "minor") {
    totalPrice *= 0.8; // Sconto 20%
  } else if (age === "senior") {
    totalPrice *= 0.6; // Sconto 40%
  }

  // Generazione del Codice CP
  const codeCP = Math.floor(Math.random() * 90000) + 10000;

  // Mostra il risultato
  document.getElementById("passenger-name").innerText = name;
  document.getElementById("price").innerText = totalPrice.toFixed(2);
  document.getElementById("code").innerText = codeCP;
  ticketSection.classList.remove("d-none");
});

// Reset del form
resetBtn.addEventListener("click", function() {
  document.getElementById("name").value = "";
  document.getElementById("km").value = "";
  document.getElementById("age").value = "adult";
  ticketSection.classList.add("d-none");
});