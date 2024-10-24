const passengerName = document.getElementById("passengerName");
const infoName = document.getElementById("inputName");
const typeTicket = document.getElementById("typeTicket");
const typePrice = document.getElementById("ticketPrice"); 

const biglietto = document.getElementById("generaButton");
biglietto.addEventListener("click", function (event) {
  event.preventDefault();

  // Calcola il prezzo e restituiscilo
  const prezzoFinale = calcolaPrezzoBiglietto();

  // Mostra la card
  document.getElementById("bigliettoCard").classList.remove("hidden");
  document.getElementById("bigliettoCardDetails").classList.remove("hidden");

  // Mostra il nome del passeggero e il prezzo del biglietto
  passengerName.innerText = infoName.value;
  typePrice.innerText = "€" + prezzoFinale.toFixed(2); // Mostra il prezzo calcolato
});

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
  let rateText = ``;

  if (eta === "minorenne") {
    rateText = `minorenne`;
    console.log("Età: Minorenne (sotto i 18 anni)");
    sconto = 0.2; // 20% di sconto per i minorenni
  } else if (eta === "maggiorenne") {
    rateText = `standard`;
    console.log("Età: Maggiorenne (tra 18 e 65 anni)");
    sconto = 0; // Nessuno sconto per i maggiorenni
  } else if (eta === "over65") {
    rateText = `over65`;
    console.log("Età: Over 65 (oltre 65 anni)");
    sconto = 0.4; // 40% di sconto per gli over 65
  } else {
    console.log("Selezione non valida");
  }

  // Calcolo del prezzo finale
  let prezzoFinale = prezzoBase * (1 - sconto);

  // Stampa il risultato nella console
  console.log("Prezzo totale del biglietto: €" + prezzoFinale.toFixed(2));

  // Se il prezzo non è valido
  if (isNaN(prezzoFinale)) {
    console.log("Per favore riprova");
    return 0; // Restituisci 0 se il calcolo non è valido
  }

  return prezzoFinale; // Restituisci il prezzo finale calcolato
}

// Event listener per il pulsante "Annulla"
const annullaButton = document.getElementById("annullaButton");
annullaButton.addEventListener("click", () => {
  document.getElementById("infoKm").value = "";
  document.getElementById("infoAge").value = "";
  document.getElementById("inputName").value = "";

  // Nascondi di nuovo la card
  document.getElementById("bigliettoCard").classList.add("hidden");
  document.getElementById("bigliettoCardDetails").classList.add("hidden");
});
