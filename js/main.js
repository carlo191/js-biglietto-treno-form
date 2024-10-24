const passengerName = document.getElementById("passengerName");
const infoName = document.getElementById("inputName");
const typeTicket = document.getElementById("typeTicket");
const typePrice = document.getElementById("ticketPrice");

const biglietto = document.getElementById("generaButton");
biglietto.addEventListener("click", function (event) {
  event.preventDefault();

  // Calcola il prezzo e il tipo di biglietto
  const risultato = calcolaPrezzoBiglietto();

  // Mostra la card
  document.getElementById("bigliettoCard").classList.remove("hidden");
  document.getElementById("bigliettoCardDetails").classList.remove("hidden");

  // Mostra il nome del passeggero, il prezzo e il tipo di biglietto
  passengerName.innerText = infoName.value;
  typePrice.innerText = "€" + risultato.prezzoFinale.toFixed(2); // Mostra il prezzo calcolato
  typeTicket.innerText = risultato.rateText; // Mostra il tipo di biglietto (minorenne, maggiorenne, over65)
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

  // Se il prezzo non è valido
  if (isNaN(prezzoFinale)) {
    alert("Per favore riprova");
    return { prezzoFinale: 0, rateText: "Selezione non valida" }; 
  }

  return { prezzoFinale: prezzoFinale, rateText: rateText }; 
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
