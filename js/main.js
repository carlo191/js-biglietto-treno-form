const km = parseInt(document.getElementById("infoKm").value);

// Funzione per calcolare il prezzo del biglietto
function calcolaPrezzoBiglietto() {
  const km = parseInt(document.getElementById("infoKm").value);
  const eta = document.getElementById("infoAge").value;

  // Prezzo base per km
  let prezzoPerKm = 0.21;

  // Calcolo del prezzo base
  let prezzoBase = km * prezzoPerKm;

  // Applicare sconto in base all'età
  let sconto = 0;

  if (eta === "minorenne") {
    console.log("Età: Minorenne (sotto i 18 anni)");
    sconto = 0.2; // 20% di sconto per i minorenni
  } else if (eta === "maggiorenne") {
    console.log("Età: Maggiorenne (tra 18 e 65 anni)");
    sconto = 0; // Nessuno sconto per i maggiorenni
  } else if (eta === "over65") {
    console.log("Età: Over 65 (oltre 65 anni)");
    sconto = 0.4; // 40% di sconto per gli over 65
  } else {
    console.log("Selezione non valida");
  }

  // Calcolo del prezzo finale
  let prezzoFinale = prezzoBase * (1 - sconto);

  // Stampare il risultato in un alert o nella console
  console.log("Prezzo totale del biglietto: €" + prezzoFinale.toFixed(2));
  if (isNaN(prezzoFinale)) {
    console.log("Per favore riprova");
  }
}

// Event listener per il pulsante "Genera"
const generaButton = document.getElementById("generaButton");
generaButton.addEventListener(`click`, () => {
  calcolaPrezzoBiglietto();
});

// Event listener per il pulsante "Annulla"
const annullaButton = document.getElementById("annullaButton");
annullaButton.addEventListener(`click`, () => {
  document.getElementById("infoKm").value = "";
  document.getElementById("infoAge").value = "";
  document.getElementById("inputName").value = "";
});
