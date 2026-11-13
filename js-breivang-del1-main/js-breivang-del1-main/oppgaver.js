// =====================================================
// Steg 1 - Oppgaver: Grunnleggende JS
// Kjør fila i terminalen:   node steg1-grunnlag.js
//
// Under hver oppgave står det hva som skal komme i konsollen.
// Sammenlign med det du får. Likt? Gå videre.
//
// Tips: skriv oppgavenummeret i console.log, så ser du hva som er hva:
//   console.log("Oppgave 2:", hp);
// =====================================================

// ---------------- VARIABLER ----------------
// En variabel er en navngitt boks som lagrer en verdi.
//   const by = "Tromsø";   -> kan IKKE endres (standardvalget)
//   let alder = 17;        -> kan endres:  alder = 18;  (ikke let andre gang)

// Oppgave 1 (grunnleggende)
// Lag let firstname og let lastname 
// med ditt eget navn.
// Skriv ut begge på samme linje.
// Forventet: Ola Nordmann  (men ditt navn)
let firstname = "Raivo"; let lastname = "Udrase-Brox";
console.log("Oppgave 1:", firstname, lastname);


// Oppgave 2 (grunnleggende)
// Lag let hp = 100. Spilleren blir truffet av en isbjørn og mister 30 hp.
// Endre hp (uten let foran) og skriv den ut.
// Forventet: 70
let hp = 100;
hp = hp - 30;
console.log("Oppgave 2:", hp);


// Oppgave 3 (grunnleggende)
// Lag const PI = 3.14159. Prøv deretter å skrive PI = 3; og kjør fila.
// Skriv i oppgavearket hva feilmeldingen betyr, og fjern linja igjen.
// Forventet: TypeError: Assignment to constant variable.s
const PI = 3.14159
console.log("Oppgave 3:", PI);
// Feilmeldinga betyr at selve koden ikke kan kjøres pga at man ikke kan skifte en konstant variabel.


// Oppgave 4 (middels)
// Et spill på Steam koster 200 kr før moms. Lag const MOMS = 0.25 og let pris = 200.
// Skriv ut prisen med moms.
// Forventet: Pris med moms: 250 kr
const MOMS = 0.25;
let pris = 200;
let PrisMedMoms = pris + (pris * MOMS);
console.log("Oppgave 4:", "Pris med moms:", PrisMedMoms, "kr");

// Oppgave 5 (avansert)
// Lag disse som const eller let. Begrunn valgene i oppgavearket:
// maks antall spillere på serveren (16), antall liv igjen (3),
// høyden på Fløya (671), temperaturen i Tromsø nå (-4).
// Forventet: ingenting i konsollen
const spillere = 16;
let liv = 3;
const FløyaHøyde = 671;
let TromsoTemp = -4;
console.log("Oppgave 5: Gjordt.")
//const på spillere og fløyahøyde pga det er verdier som ikke skal byttes
//men verdier som liv og temperatur kan skiftes, så de skal ha let.


// ---------------- TEKST OG TALL ----------------
// Tekst (string) står i anførselstegn: "Kari". Tall (number) står uten: 17.
//   + - * /   pluss, minus, gange, dele
//   %         rest etter deling: 7 % 2 gir 1
//   `${navn} er ${alder} år`   setter variabler inn i tekst (backticks)

// Oppgave 6 (grunnleggende)
// Skriv ut typeof hp og typeof firstname.
// Forventet: number
//            string
console.log("Oppgave 6:", typeof hp, typeof firstname);

// Oppgave 7 (grunnleggende)
// Bruk backticks og ${} til å skrive ut en setning med firstname og hp.
// Forventet: Ola har 70 hp
console.log(`Oppgave 7: ${firstname} har ${hp} hp`);

// Oppgave 8 (middels)
// Skriv ut 5 + 5, deretter "5" + 5, deretter Number("5") + 5.
// Forklar i oppgavearket hvorfor svar nummer to blir annerledes.
// Forventet: 10
//            55
//            10
console.log("Oppgave 8:", 5+5, "5"+5, Number("5")+5);

//Grunnen til at svar #2 blir feil, er at når nummer er i quotes så blir det til tekst, og ikke lenger en verdi.


// Oppgave 9 (middels)
// 17 elever skal deles i lag på 4. Bruk / og % .
// Skriv ut hvor mange hele lag det blir, og hvor mange som blir til overs.
// Tips: Math.floor(17 / 4) runder ned.
// Forventet: 4 lag
//            1 til overs
console.log("Oppgave 9:", Math.floor(17/4), "lag", Math.floor(17%4), "til overs")

// ---------------- VALG MED IF ----------------
// if kjører koden bare når betingelsen er sann. else kjører ellers.
//   if (temp < 0) { ... } else if (temp < 10) { ... } else { ... }
//   ===  er lik      !==  er ikke lik      <  >  <=  >=
//   &&   og (begge må være sanne)          ||   eller (minst én)

// Oppgave 10 (grunnleggende)
// const temp = -8. Skriv ut "Kuldegrader" hvis temp er under 0.
// Forventet: Kuldegrader
const temp = -8;
if (temp < 0) {
    console.log("Oppgave 10:", temp, "Kuldegrader")
} 
else {
    console.log("Oppgave 10:", "Alt for fette varmt ute")
}


// Oppgave 11 (grunnleggende)
// Bruk hp fra oppgave 2. Hvis hp er 0 eller mindre: "Game over".
// Ellers: "Spillet fortsetter".
// Forventet: Spillet fortsetter
if (hp <= 0) {
    console.log(
        "Oppgave 11:",
        "Game over."
        )
}
else { 
    console.log("Oppgave 11:", "Spillet fortsetter")
}

// Oppgave 12 (middels)
// const klokka = 21. Bruk if, else if og else:
// før 10: "God morgen", før 18: "God dag", ellers: "God kveld".
// Forventet: God kveld
// Test også: endre klokka til 8 og kjør på nytt. Da skal det stå God morgen.
const klokka = 21;
if (klokka <= 10) {
    console.log("Oppgave 12:", "God morgen")
}
else if (klokka <= 18) {
    console.log("Oppgave 12:", "God dag")
}
else {
    console.log("Oppgave 12:", "God kveld")
}


// Oppgave 13 (middels)
// Det er gode sjanser for nordlys når skydekket er under 30 OG klokka er 18 eller mer.
// const skydekke = 20 og const time = 22. Bruk &&.
// Forventet: Gode sjanser for nordlys
// Test også: skydekke = 80 skal gi: Dårlige sjanser i kveld
const skydekke = 20;
const time = 22;
if (skydekke <= 30 && time >= 18) {
    console.log("Oppgave 13:", "Gode sjanser for nordlys")
}
else {console.log("Oppgave 13:", "Dårlige sjanser i kveld")};

// Oppgave 14 (avansert)
// Billett til Fjellheisen: barn under 12 betaler 50 kr, 67 år og eldre betaler 60 kr,
// alle andre betaler 100 kr. Lag let alder og skriv ut prisen.
// Forventet: alder 8 -> 50 kr,  alder 30 -> 100 kr,  alder 70 -> 60 kr
let alder = 70
if (alder <= 12) {
    console.log("Oppgave 14: 50 kr")
}
else if (alder >= 67) {
    console.log("Oppgave 14: 60 kr")
}
else {
    console.log("Oppgave 14: 100 kr")
}

// ---------------- LØKKER ----------------
// En løkke gjentar kode.
//   for (let i = 1; i <= 3; i++) { ... }   start; fortsett så lenge; øk med 1
//   while (liv > 0) { liv--; }              så lenge noe er sant (husk å endre verdien!)

// Oppgave 15 (grunnleggende)
// Bruk en for-løkke som skriver ut tallene 1 til 5.
// Forventet: 1
//            2
//            3
//            4
//            5
console.log("Oppgave 15:")
for (let i = 1; i <=5; i++) {
    console.log(i)
}


// Oppgave 16 (grunnleggende)
// En rakett skal skytes opp fra Andøya. Tell ned fra 10 til 1 med en for-løkke,
// og skriv ut "Liftoff!" etter løkka.
// Forventet: 10, 9, 8 ... 1 (én per linje), så Liftoff!
console.log("Oppgave 16:")
for (let i = 10; i >=1; i--) {
    console.log(i)
}
if (i = 10) {
    console.log("Liftoff!")
}


// Oppgave 17 (middels)
// Regn ut summen av alle tallene fra 1 til 100 med en løkke.
// Tips: let sum = 0; før løkka.
// Forventet: 5050
let sum = 0;
for (let i = 1; i <=100; i++) {
    sum += i;
}
console.log("Oppgave 17:", sum);

// Oppgave 18 (middels)
// Lag let bossHp = 100. Hvert slag tar 15 hp. Bruk en while-løkke og tell
// hvor mange slag som trengs før bossHp er 0 eller mindre.
// Forventet: 7 slag
let bossHp = 100;
let slag = 0;

while (bossHp > 0) {
    bossHp -= 15;
    slag++;
}

console.log("Oppgave 18:", slag, "slag");

// Oppgave 19 (avansert)
// Skriv ut tallene 1 til 15. Er tallet delelig med 3, skriv "Nord" i stedet.
// Delelig med 5: "Lys". Delelig med både 3 og 5: "Nordlys".
// Tips: tall % 3 === 0 betyr delelig med 3.
// Forventet: 1, 2, Nord, 4, Lys, Nord, 7, 8, Nord, Lys, 11, Nord, 13, 14, Nordlys
console.log("Oppgave 19:")
for (let tall = 1; tall <= 15; tall++) {
  if (tall % 3 === 0 && tall % 5 === 0) {
    console.log("Nordlys");
  } else if (tall % 3 === 0) {
    console.log("Nord");
  } else if (tall % 5 === 0) {
    console.log("Lys");
  } else {
    console.log(tall);
  }
}

// ---------------- ARRAYS ----------------
// En array er en liste: const fag = ["Utvikling", "Driftstøtte"];
//   fag[0]          første verdi (indeks starter på 0)
//   fag.length      antall verdier
//   fag.push("YFF") legger til bakerst
//   fag.length      gir anallet variabler i array
//   for (let i = 0; i < fag.length; i++) { console.log(fag[i]); }



// Oppgave 20 (grunnleggende)
// const byer = ["Tromsø", "Bodø", "Alta", "Harstad", "Narvik"];
// Skriv ut den første byen og hvor mange byer det er.
// Forventet: Tromsø
//            5
const byer = ["Tromsø", "Bodø", "Alta", "Harstad", "Narvik"];
console.log("Oppgave 20:", byer[0], byer.length)


// Oppgave 21 (grunnleggende)
// Legg til "Hammerfest" med push, og skriv ut den siste byen og det nye antallet.
// Tips: siste element er byer[byer.length - 1]
// Forventet: Hammerfest
//            6
byer.push("Hammerfest")
console.log("Oppgave 21:", byer[byer.length - 1], byer.length)


// Oppgave 22 (middels)
// Skriv ut alle byene med en for-løkke.
// Forventet: Tromsø, Bodø, Alta, Harstad, Narvik, Hammerfest (én per linje)
console.log("Oppgave 22:")
for (let byRekke = 0; byRekke < byer.length; byRekke++) {
    console.log(byer[byRekke]);
}


// Oppgave 23 (middels)
// const temperaturer = [-4, -6, -2, 1, -8, -11, -3];
// Tell hvor mange dager det var kaldere enn -5. Bruk for og if.
// Forventet: 3
const temperaturer = [-4, -6, -2, 1, -8, -11, -3];
let kaldt = 0;

for (let brr = 0; brr < temperaturer.length; brr++) {
  if (temperaturer[brr] < -5) {
    kaldt++;
  }
}

console.log(kaldt);


// Oppgave 24 (avansert)
// const inventory = ["sverd", "drikk", "skjold", "drikk", "fiskestang", "drikk"];
// a) Tell hvor mange "drikk" spilleren har.
// b) Lag en ny array uten "drikk" ved å bruke en løkke og push.
// Forventet: 3
//            [ 'sverd', 'skjold', 'fiskestang' ]
const inventory = ["sverd", "drikk", "skjold", "drikk", "fiskestang", "drikk"];
let Drikker = 0;
let nyInventory = [];

for (let i = 0; i < inventory.length; i++) {
  if (inventory[i] === "drikk") {
    Drikker++;
  } else {
    nyInventory.push(inventory[i]);
  }
}

console.log("Oppgave 24:", Drikker);
console.log(nyInventory);


// Oppgave 25 (avansert)
// inventory er const, men push virker likevel. Hvorfor?
// Skriv svaret i oppgavearket.
// Forventet: ingenting i konsollen

// Const betyr ikke at "lista aldri kan endres", det betyr bare at variabelen ikke kan peke til en ny liste. 
// Dette betyr at push kan fortsatt legge til eller ta informasjon ut av lista, men lista kan bare ikke skiftes.