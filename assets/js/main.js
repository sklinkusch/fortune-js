// Function to create the English fortune sentence
const fortune_engl = (
  numch = 0,
  partn = "Jane Doe",
  loc = "space",
  house = "a house",
  job = "a worker in",
  area = 1
) => {
  let child =
    numch === 0 ? "no kids" : numch === 1 ? `${numch} kid` : `${numch} kids`;
  let sqm =
    area === 1 ? ` of ${area} square meter` : area > 1 ? ` of ${area} square meters` : "";
  return `You will be ${job} ${loc}, married to ${partn} with ${child} living ${house}${sqm}.`;
};
// Function to create the German fortune sentence
const fortune_germ = (
  numch = 0,
  partn = "Monika Mustermann",
  loc = "Kosmos",
  house = "ein Haus",
  job = "ein Arbeiter in",
  area = 1
) => {
  let child =
    numch === 0 ? "keine Kinder" : numch === 1 ? "ein Kind" : `${numch} Kinder`;
  let sqm =
    area === 1 ? " mit einem Quadratmeter Wohnfläche" : area > 1 ? ` mit ${area} Quadratmetern Wohnfläche` : "";
  let job_ft;
  let loc_ft;
  if (/von/.test(job) && (loc === "den Vereinigten Staaten von Amerika" || loc === "der Türkei")) {
    job_ft = job.substr(0, (job.length - 4));
    loc_ft = loc.replace("den", "der");
  } else if (/von/.test(job) && loc === "Vatikan") {
    job_ft = job.replace("von", "des");
    loc_ft = loc.padEnd(8, "s");
  } else if (/ in/.test(job) && loc === "Vatikan") {
    job_ft = job.replace(" in", " im");
    loc_ft = loc;
  } else {
    job_ft = job;
    loc_ft = loc;
  }
  return `Du wirst ${job_ft} ${loc_ft} sein, mit ${partn} verheiratet sein, ${child} haben und ${house}${sqm} leben.`;
};
// Functions to create random values
const randomize = MyArray => Math.floor(Math.random() * MyArray.length);
const randomvalue = (min, max) => Math.floor(Math.random() * (max - min) + min);
// Arrays for possible solutions (english)
let jobs_engl = [
  "a doctor in",
  "a drug dealer in",
  "a murderer in",
  "a pimp in",
  "a prostitute in",
  "the president of",
  "the dictator of",
  "the king of",
  "the queen of",
  "the emperor of",
  "the empress of",
  "the Dalai Lama in",
  "a farmer in",
  "the pope in",
  "a CEO in",
  "a clown in",
  "a bank robber in"
];
let geolocs_engl = [
  "North Korea",
  "Japan",
  "the USA",
  "Germany",
  "Italy",
  "Finland",
  "South Africa",
  "Argentina",
  "Mexico",
  "Vatican City",
  "Australia",
  "Thailand",
  "China",
  "Saudi-Arabia",
  "France",
  "Turkey",
  "Russia"
];
let partners_engl = [
  "a man",
  "a woman",
  "several men at the same time",
  "several women at the same time",
  "several women and men at the same time",
  "no one",
  "your dog",
  "your cat",
  "your hamster",
  "your guinea-pig",
  "your pig",
  "your cow",
  "your bull",
  "your bear",
  "your turtle",
  "your bunny",
  "your horse",
  "your sheep",
  "your goat",
  "your job"
];
let houses_engl = [
  "in a house",
  "in a flat",
  "in a penthouse",
  "in a public restroom",
  "in a palace",
  "in a whorehouse",
  "in a prison cell",
  "in a tent",
  "in a trailer",
  "in a phone box",
  "in a stable",
  "on the street"
];
let jobs_germ = [
  "ein Arzt in",
  "ein Drogendealer in",
  "ein Mörder in",
  "ein Zuhälter in",
  "eine Prostituierte in",
  "der Präsident von",
  "der Diktator von",
  "der König von",
  "die Königin von",
  "der Kaiser von",
  "die Kaiserin von",
  "der Dalai Lama in",
  "ein Bauer in",
  "der Papst in",
  "ein Vorstandsvorsitzender in",
  "ein Clown in",
  "ein Bankräuber in"
];
let geolocs_germ = [
  "Nordkorea",
  "Japan",
  "den Vereinigten Staaten von Amerika",
  "Deutschland",
  "Italien",
  "Finnland",
  "Südafrika",
  "Argentinien",
  "Mexiko",
  "Vatikan",
  "Australien",
  "Thailand",
  "China",
  "Saudi-Arabien",
  "Frankreich",
  "der Türkei",
  "Russland"
];
let partners_germ = [
  "einem Mann",
  "einer Frau",
  "mehreren Männern gleichzeitig",
  "mehreren Frauen gleichzeitig",
  "mehreren Frauen und Männern gleichzeitig",
  "niemandem",
  "deinem Hund",
  "deiner Katze",
  "deinem Hamster",
  "deinem Meerschweinchen",
  "deinem Schwein",
  "deiner Kuh",
  "deinem Stier",
  "deinem Bären",
  "deiner Schildkröte",
  "deinem Hasen",
  "deinem Pferd",
  "deinem Schaf",
  "deiner Ziege",
  "deinem Beruf"
];
let houses_germ = [
  "in einem Haus",
  "in einer Wohnung",
  "in einem Penthouse",
  "in einer öffentlichen Toilette",
  "in einem Schloss",
  "in einem Bordell",
  "in einer Gefängniszelle",
  "in einem Zelt",
  "in einem Wohnwagen",
  "in einer Telefonzelle",
  "in einem Stall",
  "auf der Straße"
];
function newFortune() {
  let LangSel = document.getElementById("language").value;
  let lang;
  switch (LangSel) {
    case "from":
      lang = navigator.language;
      break;
    case "de":
      lang = "de";
      break;
    case "en":
      lang = "en";
      break;
  }
  let jobnr;
  let geonr;
  let partnr;
  let housenr;
  let house;
  switch (lang) {
    case "de":
    case "de-DE":
    case "de-AT":
      jobnr = randomize(jobs_germ);
      geonr = randomize(geolocs_germ);
      partnr = randomize(partners_germ);
      housenr = randomize(houses_germ);
      house = houses_germ[housenr];
      break;
    default:
      jobnr = randomize(jobs_engl);
      geonr = randomize(geolocs_engl);
      partnr = randomize(partners_engl);
      housenr = randomize(houses_engl);
      house = houses_engl[housenr];
  }
  let childnr = randomvalue(0, 20);
  // Adjust house size to the "house"
  let minimum;
  let maximum;
  switch (house) {
    case "in einem Haus":
    case "in a house":
      minimum = 50;
      maximum = 201;
      break;
    case "in einer Wohnung":
    case "in a flat":
      minimum = 30;
      maximum = 101;
      break;
    case "in einem Penthouse":
    case "in a penthouse":
      minimum = 500;
      maximum = 1001;
      break;
    case "in einer öffentlichen Toilette":
    case "in a public restroom":
      minimum = 10;
      maximum = 41;
      break;
    case "in einem Schloss":
    case "in a palace":
      minimum = 500;
      maximum = 6001;
      break;
    case "in einem Bordell":
    case "in a whorehouse":
      minimum = 50;
      maximum = 3001;
      break;
    case "in einer Gefängniszelle":
    case "in a prison cell":
      minimum = 8;
      maximum = 11;
      break;
    case "in einem Zelt":
    case "in a tent":
      minimum = 4;
      maximum = 21;
      break;
    case "in einem Wohnwagen":
    case "in a trailer":
      minimum = 8;
      maximum = 21;
      break;
    case "in einer Telefonzelle":
    case "in a phone box":
      minimum = 1;
      maximum = 5;
      break;
    case "in einem Stall":
    case "in a stable":
      minimum = 30;
      maximum = 5001;
      break;
    case "auf der Straße":
    case "on the street":
      minimum = 0;
      maximum = 1;
      break;
    default:
      minimum = 1;
      maximum = 1000;
  }
  let areanr = randomvalue(minimum, maximum);
  //Function call and output to the HTML
  switch (lang) {
    case "de":
    case "de-AT":
    case "de-DE":
      document.getElementById("fortune").innerHTML = fortune_germ(
        childnr,
        partners_germ[partnr],
        geolocs_germ[geonr],
        houses_germ[housenr],
        jobs_germ[jobnr],
        areanr
      );
      break;
    default:
      document.getElementById("fortune").innerHTML = fortune_engl(
        childnr,
        partners_engl[partnr],
        geolocs_engl[geonr],
        houses_engl[housenr],
        jobs_engl[jobnr],
        areanr
      );
  }
}
// old prompt -> deprecated
/*let userJob = prompt("Desired Job?", "Doctor");
let userLoc = prompt("Where?", "Aerospace");
let userPart = prompt("Partner?", "anyone");
let userChild = prompt("Number of Children", 0);
let userArea = prompt("Size of House", 40);
// Console log user input -> deprecated
console.log(fortune(userChild, userPart, userLoc, userJob, userArea));
// Alert output -> deprecated
 alert(
   fortune(childnr, partners[partnr], geolocs[geonr], jobs[jobnr], areanr)
);*/
