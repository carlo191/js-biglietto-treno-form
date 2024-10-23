const htmlCard = `<section class="calcolate-ticket bg-white mx-5 hidden" id="bigliettoCardDetails">
  <div class="container">
    <div class="row">
      <!-- Prima card 
      <h3 class="mt-2">DETTAGLIO PASSEGERI</h3>
      <hr />
      <div class="col-4">
        <div class="card">
          <div class="card-body">
            <p class="infoName" id="infoName">NOME PASSEGERO</p>
          </div>
        </div>
      </div>

       Seconda card 
      <div class="col-2">
        <div class="card">
          <div class="card-body">
            <p>Offerta</p>
            <p>Biglietto Standard</p>
          </div>
        </div>
      </div>

      Terza card 
      <div class="col-2">
        <div class="card">
          <div class="card-body">
            <p>Carrozza</p>
            <p>5</p>
          </div>
        </div>
      </div>

       Quarta card 
      <div class="col-2">
        <div class="card">
          <div class="card-body">
            <p>Codice CP</p>
            <p>92911</p>
          </div>
        </div>
      </div>

       Quinta card 
      <div class="col-2">
        <div class="card">
          <div class="card-body">
            <p>Costo biglietto</p>
            <p></p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  </div>
</section>
      </div>
    </section> -->`;

const biglietto = document.getElementById("generaButton");
biglietto.addEventListener("click", function (event) {
  event.preventDefault();

  calcolaPrezzoBiglietto();

  // Mostra la card
  document.getElementById("bigliettoCard").classList.remove("hidden");
  document.getElementById("bigliettoCardDetails").classList.remove("hidden");
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

  // Stampa il risultato nella console
  console.log("Prezzo totale del biglietto: €" + prezzoFinale.toFixed(2));

  // Se il prezzo non è valido
  if (isNaN(prezzoFinale)) {
    console.log("Per favore riprova");
  }
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
