// Function to determine the language
function getLanguage() {
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
    case "fr":
      lang = "fr";
      break;
    case "la":
      lang = "la";
      break;
    case "it":
      lang = "it";
      break;
  }
  return lang;
}
// Function to create the English fortune sentence
function fortune_engl(
  numch = 0,
  partn = "Jane Doe",
  loc = "space",
  house = "a house",
  job = "a worker in",
  area = 1
) {
  let child =
    numch === 0 ? "no kids" : numch === 1 ? `${numch} kid` : `${numch} kids`;
  let sqm =
    area === 1
      ? ` of ${area} square meter`
      : area > 1
        ? ` of ${area} square meters`
        : "";
  return `You will be ${job} ${loc}, married to ${partn} with ${child} living ${house}${sqm}.`;
};
// Function to create the German fortune sentence
function fortune_germ(
  numch = 0,
  partn = "Monika Mustermann",
  loc = "Kosmos",
  house = "ein Haus",
  job = "ein Arbeiter in",
  area = 1
) {
  let child =
    numch === 0 ? "keine Kinder" : numch === 1 ? "ein Kind" : `${numch} Kinder`;
  let sqm =
    area === 1
      ? " mit einem Quadratmeter Wohnfläche"
      : area > 1
        ? ` mit ${area} Quadratmetern Wohnfläche`
        : "";
  let job_ft;
  let loc_ft;
  if (
    /von/.test(job) &&
    (loc === "den Vereinigten Staaten von Amerika" ||
      loc === "der Türkei" ||
      loc === "den Malediven" ||
      loc === "der Schweiz")
  ) {
    job_ft = job.substr(0, job.length - 4);
    loc_ft = loc.replace("den", "der");
  } else if (job.endsWith('von') && loc === "Vatikan") {
    job_ft = job.replace("von", "des");
    loc_ft = loc.padEnd(8, "s");
  } else if (job.endsWith('von') && loc === "dem Vereinigten Königreich") {
    job_ft = job.replace("von", "des");
    loc_ft = "Vereinigten Königreichs";
  } else if (job.endsWith('in') && loc === "Vatikan") {
    job_ft = job.replace(" in", " im");
    loc_ft = loc;
  } else if (job.endsWith('in') && loc === "dem Vereinigten Königreich") {
    job_ft = job.replace(" in", " im");
    loc_ft = loc.slice(4);
  } else if (job.endsWith('in') && loc === "den Malediven") {
    job_ft = job.replace(" in", " auf");
    loc_ft = loc;
  } else {
    job_ft = job;
    loc_ft = loc;
  }
  return `Du wirst ${job_ft} ${loc_ft} sein, mit ${partn} verheiratet sein, ${child} haben und ${house}${sqm} leben.`;
};
// Function to create the French fortune sentence
function fortune_fr(
  numch = 0,
  partn = "Mme Toulemonde",
  loc = "en Aérospace",
  house = "une maison",
  job = "un ouvrier",
  area = 1
) {
  let marie =
    /reine/.test(job) || /impératrice/.test(job) || /prostituée/.test(job)
      ? "mariée"
      : "marié";
  let child =
    numch === 0
      ? `n'auras pas d'enfants`
      : numch === 1
        ? `auras un enfant`
        : `auras ${numch} enfants`;
  let sqm =
    area === 1
      ? ` d'un mètre carré`
      : area > 1
        ? ` de ${area} mètres carré`
        : "";
  let job_ft;
  let loc_ft;
  if (job.endsWith('en') && loc.startsWith('la')) {
    job_ft = job;
    loc_ft = loc.substring(3);
  } else if (job.endsWith('en') && loc.startsWith('les')) {
    job_ft = job.replace(" en", " aux");
    loc_ft = loc.substring(4);
  } else if (job.endsWith('en') && loc.startsWith('le')) {
    job_ft = job.replace(" en", " au");
    loc_ft = loc.substring(3);
  } else if (job.endsWith('en') && loc.startsWith("l'")) {
    job_ft = job;
    loc_ft = loc.substring(2);
  } else if (job.endsWith('de') && loc.startsWith('la')) {
    job_ft = job;
    loc_ft = loc.substring(3);
  } else if (job.endsWith('de') && loc.startsWith('les')) {
    job_ft = job.replace(" de", " des");
    loc_ft = loc.substring(4);
  } else if (job.endsWith('de') && loc.startsWith('le')) {
    job_ft = job.replace(" de", " du");
    loc_ft = loc.substring(3);
  } else if (job.endsWith('de') && loc.startsWith("l'")) {
    job_ft = job.replace(" de", " d'");
    loc_ft = loc.substring(2);
  }
  return `Tu seras ${job_ft} ${loc_ft}, tu seras ${marie} avec ${partn}, tu ${child} et tu ${house}${sqm}.`;
};
function fortune_la(
  numch = 0,
  partn = "Caio Iulio Caesare",
  loc = "in terra",
  house = "mansione",
  job = "faber",
  area = 1
) {
  let marie;
  if (/regina/.test(job) || /imperatoria/.test(job) || /prostituta/.test(job)) {
    marie = "nupta";
  } else {
    marie = "nuptus";
  }
  let child =
    numch === 0
      ? "non erunt filii"
      : numch === 1
        ? "erit filius"
        : `erunt ${numch} filii`;
  let sqm =
    area == 1
      ? "unius metri quadrati"
      : area > 1
        ? `${area} metrorum quadratorum`
        : "";
  return `Eris ${job} ${loc}, ${marie} cum ${partn}, tibi ${child} ${house} ${sqm}.`;
};
// Italian function
function fortune_it(
  numch = 0,
  partn = "Dante Alighieri",
  loc = "in Italia",
  house = "casa",
  job = "dottore",
  area = 1
) {
  let marie =
    /regina/.test(job) || /imperatrice/.test(job) || /prostituta/.test(job)
      ? "sposata"
      : "sposato";
  let child =
    numch === 0
      ? "alcuno bambino"
      : numch === 1
        ? "un bambino"
        : `${numch} bambini`;
  let sqm =
    area === 1
      ? "di un metro quadrato"
      : area > 1
        ? `di ${area} metri quadrati`
        : "";
  let job_ft;
  let loc_ft;
  if (job.endsWith("in") && loc.startsWith('nelle')) {
    job_ft = job.slice(0, -3);
    loc_ft = loc;
  } else if (job.endsWith("in") && loc.startsWith('nello')) {
    job_ft = job.slice(0, -3);
    loc_ft = loc;
  } else if (job.endsWith("in") && loc.startsWith('nel')) {
    job_ft = job.slice(0, -3);
    loc_ft = loc;
  } else if (job.endsWith("in") && loc.startsWith('nei')) {
    job_ft = job.slice(0, -3);
    loc_ft = loc;
  } else if (job.endsWith("in") && loc.startsWith('negli')) {
    job_ft = job.slice(0, -3);
    loc_ft = loc;
  } else if (job.endsWith("di") && loc.startsWith('nelle')) {
    job_ft = job.slice(0, -3);
    loc_ft = loc.replace("nelle ", "delle ");
  } else if (job.endsWith("di") && loc.startsWith('nello')) {
    job_ft = job.slice(0, -3);
    loc_ft = loc.replace("nello ", "dello ");
  } else if (job.endsWith("di") && loc.startsWith('nel')) {
    job_ft = job.slice(0, -3);
    loc_ft = loc.replace("nel ", "del ");
  } else if (job.endsWith("di") && loc.startsWith('negli')) {
    job_ft = job.slice(0, -3);
    loc_ft = loc.replace("negli ", "degli ");
  } else if (job.endsWith("di") && /^[AEIOU]/.test(loc)) {
    job_ft = job.slice(0, -3);
    loc_ft = `dell'${loc}`;
  } else if (job.endsWith("di")) {
    job_ft = job.slice(0, -3);
    loc_ft = `della ${loc}`;
  } else {
    job_ft = job;
    loc_ft = loc;
  }
  return `Tu sarai ${job_ft} ${loc_ft}, ${marie} con ${partn}, tu avrai ${child} e ${house} ${sqm}.`;
};
// Functions to create random values
function randomize(MyArray) {
  return Math.floor(Math.random() * MyArray.length);
}
function randomvalue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
// Arrays for possible solutions (english)
var jobs = [
  { en: "a doctor in", de: "ein Arzt in", fr: "un médecin en", la: "medicus", it: "un dottore in" },
  { en: "a drug dealer in", de: "ein Drogendealer in", fr: "un narcotrafiquant en", la: "mercator medicamentorum", it: "un narcotrafficante in" },
  { en: "a murderer in", de: "ein Mörder in", fr: "un assassin en", la: "homicida", it: "un assassino in" },
  { en: "a pimp in", de: "ein Zuhälter in", fr: "un souteneur en", la: "leno", it: "un ruffiano in" },
  { en: "a prostitute in", de: "eine Prostituierte in", fr: "une prostituée en", la: "prostituta", it: "una prostituta in" },
  { en: "the president of", de: "der Präsident von", fr: "le président de", la: "praeses", it: "il presidente di" },
  { en: "the dictator of", de: "der Diktator von", fr: "le dictateur de", la: "dictator", it: "il dittatore di" },
  { en: "the king of", de: "der König von", fr: "le roi de", la: "rex", it: "il re di" },
  { en: "the queen of", de: "die Königin von", fr: "la reine de", la: "regina", it: "la regina di" },
  { en: "the emperor of", de: "der Kaiser von", fr: "l'empereur de", la: "imperator", it: "l'imperatore di" },
  { en: "the empress of", de: "die Kaiserin von", fr: "l'impératrice", la: "uxor imperatoria", it: "l'imperatrice di" },
  { en: "the Dalai Lama in", de: "der Dalai Lama in", fr: "le Dalaï-lama en", la: "Dalai Lama", it: "il Dalai Lama in" },
  { en: "a farmer in", de: "ein Bauer in", fr: "un paysan en", la: "agricola", it: "un contadino in" },
  { en: "the pope in", de: "der Papst in", fr: "le pape en", la: "pontifex maximus", it: "il papa in" },
  { en: "a CEO in", de: "ein Vorstandsvorsitzender in", fr: "un président du directoire en", la: "praeses directorati", it: "un amministratore delegato in" },
  { en: "a clown in", de: "ein Clown in", fr: "un clown en", la: "morus", it: "un buffone in" },
  { en: "a bank robber in", de: "ein Bankräuber in", fr: "un voleur de banque en", la: "raptor argentariae", it: "un rapinatore in banca in" },
  { en: "a diving instructor in", de: "ein Tauchlehrer in", fr: "un instructeur de plongée en", la: "instructor demergendi", it: "un istruttore di immersioni in" },
  { en: "a skiing instructor in", de: "ein Skilehrer in", fr: "un moniteur de ski en", la: "instructor nartis currendi", it: "un maestro di sci in" }
]
var geolocs = [
  { en: "North Korea", de: "Nordkorea", fr: "la Corée du Nord", la: "in Corea Septentrionale", it: "Corea del Nord" },
  { en: "Japan", de: "Japan", fr: "le Japon", la: "in Iaponia", it: "nel Giappone" },
  { en: "the United States", de: "den Vereinigten Staaten", fr: "les États-Unis", la: "in Civitatibus Foederatis Americae", it: "negli Stati Uniti" },
  { en: "Germany", de: "Deutschland", fr: "l'Allemagne", la: "in Germania", it: "Germania" },
  { en: "Italy", de: "Italien", fr: "l'Italie", la: "in Italia", it: "Italia" },
  { en: "Finland", de: "Finnland", fr: "la Finlande", la: "in Finnia", it: "Finlandia" },
  { en: "South Africa", de: "Südafrika", fr: "l'Afrique du Sud", la: "in Africa Australe", it: "nel Sudafrica" },
  { en: "Argentina", de: "Argentinien", fr: "l'Argentine", la: "in Argentina", it: "Argentina" },
  { en: "Mexico", de: "Mexiko", fr: "le Mexique", la: "in Mexico", it: "nel Messico" },
  { en: "Vatican City", de: "Vatikan", fr: "le Vatican", la: "in Civitate Vaticana", it: "nel Vaticano" },
  { en: "Australia", de: "Australien", fr: "l'Australie", la: "in Australia", it: "Australia" },
  { en: "Thailand", de: "Thailand", fr: "la Thaïlande", la: "in Thailandia", it: "Thailandia" },
  { en: "China", de: "China", fr: "la Chine", la: "in Sinis", it: "Cina" },
  { en: "Saudi Arabia", de: "Saudi-Arabien", fr: "l'Arabie Saoudite", la: "in Arabia Saudita", it: "Arabia Saudita" },
  { en: "France", de: "Frankreich", fr: "la France", la: "in Gallia", it: "Francia" },
  { en: "Turkey", de: "der Türkei", fr: "la Turquie", la: "in Turcia", it: "Turchia" },
  { en: "Russia", de: "Russland", fr: "la Russie", la: "in Russia", it: "Russia" },
  { en: "Switzerland", de: "der Schweiz", fr: "la Suisse", la: "in Helvetia", it: "Svizzera" },
  { en: "Nepal", de: "Nepal", fr: "le Népal", la: "in Nepalia", it: "nel Nepal" },
  { en: "Maldives", de: "den Malediven", fr: "les Maldives", la: "in Insulis Maldivis", it: "nelle Maldive" },
  { en: "the United Kingdom", de: "dem Vereinigten Königreich", fr: "le Royaume-Uni", la: "in Britanniarum Regnum", it: "nel Regno Unito" },
  { en: "Hungary", de: "Ungarn", fr: "l'Hongrie", la: "in Hungaria", it: "Ungheria" },
  { en: "Poland", de: "Polen", fr: "la Pologne", la: "in Polonia", it: "Polonia" },
  { en: "Austria", de: "Österreich", fr: "l'Autriche", la: "in Austria", it: "Austria" }
]
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
  "in a public restroom",
  "in a palace",
  "in a whorehouse",
  "in a prison cell",
  "in a tent",
  "in a trailer",
  "in a phone box",
  "in a stable",
  "in a swimming pool",
  "in a cave",
  "on the street"
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
  "in einer öffentlichen Toilette",
  "in einem Schloss",
  "in einem Bordell",
  "in einer Gefängniszelle",
  "in einem Zelt",
  "in einem Wohnwagen",
  "in einer Telefonzelle",
  "in einem Stall",
  "in einem Schwimmbecken",
  "in einer Höhle",
  "auf der Straße"
];
let partners_fr = [
  "un homme",
  "une femme",
  "plusieurs hommes en même temps",
  "plusieurs femmes en même temps",
  "plusieurs femmes et plusieurs hommes en même temps",
  "personne",
  "ton chien",
  "ton chat",
  "ton hamster",
  "ton cochon d'Inde",
  "ton cochon",
  "ta vache",
  "ton taureau",
  "ton ours",
  "ta tortue",
  "ton lièvre",
  "ton cheval",
  "ton mouton",
  "ta chèvre",
  "ta profession"
];
let houses_fr = [
  "habiteras dans une maison",
  "habiteras dans un appartement",
  "habiteras dans des toilettes publiques",
  "habiteras dans un château",
  "habiteras dans une maison close",
  "habiteras dans une cellule de prison",
  "habiteras dans une tente",
  "habiteras dans une caravane",
  "habiteras dans une cabine téléphonique",
  "habiteras dans une étable",
  "habiteras dans une piscine",
  "habiteras dans une grotte",
  "seras sans domicile fixe"
];
let partners_la = [
  "viro",
  "muliere",
  "simul compluribus viris",
  "simul compluribus mulieribus",
  "simul compluribus mulieribus virisque",
  "nullo",
  "cane tuo",
  "fele tua",
  "criceto tuo",
  "cavia porcellus tua",
  "porco tuo",
  "bove tuo",
  "urso tuo",
  "testudine tua",
  "lepo tuo",
  "equo tuo",
  "ove tua",
  "capra tua",
  "professione tua"
];
let houses_la = [
  "habitabisque in mansione",
  "habitabisque in domicilio",
  "habitabisque in latrina publica",
  "habitabisque in castello",
  "habitabisque in lupanare",
  "habitabisque in carcere",
  "habitabisque in tabernaculo",
  "habitabisque in tracto periegetico",
  "habitabisque in cabina telephoni",
  "habitabisque in stabulo",
  "habitabisque in thermae",
  "habitabisque in caverna",
  "erisque domo carens"
];
let partners_it = [
  "un uomo",
  "una donna",
  "diversi uomini allo stesso tempo",
  "diverse donne allo stesso tempo",
  "diverse donne e uomini allo stesso tempo",
  "nessuno",
  "il tuo cane",
  "il tuo gatto",
  "il tuo criceto",
  "il tuo pocellino d'India",
  "il tuo maiale",
  "la tua mucca",
  "il tuo toro",
  "il tuo orso",
  "la tua tartaruga",
  "la tua lepre",
  "il tuo cavallo",
  "la tua pecora",
  "la tua capra",
  "la tua professione"
];
let houses_it = [
  "abiterai in una casa",
  "abiterai in un appartamento",
  "abiterai in un gabinetto pubblico",
  "abiterai in un castello",
  "abiterai in un bordello",
  "abiterai in una cella",
  "abiterai in una tenda",
  "abiterai in un roulotte",
  "abiterai in una cabina del telefono",
  "abiterai in una stalla",
  "abiterai in una piscina",
  "abiterai in una grotta",
  "serai senza tetto"
];
function newFortune() {
  let lang = getLanguage();
  let jobnr = randomize(jobs);
  let geonr = randomize(geolocs);
  let partnr;
  let housenr;
  let house;
  switch (lang) {
    case "de":
    case "de-DE":
    case "de-AT":
      partnr = randomize(partners_germ);
      housenr = randomize(houses_germ);
      house = houses_germ[housenr];
      break;
    case "fr":
    case "fr-FR":
      partnr = randomize(partners_fr);
      housenr = randomize(houses_fr);
      house = houses_fr[housenr];
      break;
    case "la":
      partnr = randomize(partners_la);
      housenr = randomize(houses_la);
      house = houses_la[housenr];
      break;
    case "it":
    case "it-IT":
      partnr = randomize(partners_it);
      housenr = randomize(houses_it);
      house = houses_it[housenr];
      break;
    default:
      partnr = randomize(partners_engl);
      housenr = randomize(houses_engl);
      house = houses_engl[housenr];
  }
  let childnr = randomvalue(0, 20);
  // Adjust house size to the "house"
  let minimum;
  let maximum;
  switch (house) {
    case houses_germ[0]:
    case houses_engl[0]:
    case houses_fr[0]:
    case houses_la[0]:
    case houses_it[0]:
      minimum = 50;
      maximum = 1001;
      break;
    case houses_germ[1]:
    case houses_engl[1]:
    case houses_fr[1]:
    case houses_la[1]:
    case houses_it[1]:
      minimum = 30;
      maximum = 101;
      break;
    case houses_germ[2]:
    case houses_engl[2]:
    case houses_fr[2]:
    case houses_la[2]:
    case houses_it[2]:
      minimum = 10;
      maximum = 41;
      break;
    case houses_germ[3]:
    case houses_engl[3]:
    case houses_fr[3]:
    case houses_la[3]:
    case houses_it[3]:
      minimum = 500;
      maximum = 6001;
      break;
    case houses_germ[4]:
    case houses_engl[4]:
    case houses_fr[4]:
    case houses_la[4]:
    case houses_it[4]:
      minimum = 50;
      maximum = 3001;
      break;
    case houses_germ[5]:
    case houses_engl[5]:
    case houses_fr[5]:
    case houses_la[5]:
    case houses_it[5]:
      minimum = 8;
      maximum = 11;
      break;
    case houses_germ[6]:
    case houses_engl[6]:
    case houses_fr[6]:
    case houses_la[6]:
    case houses_it[6]:
      minimum = 4;
      maximum = 21;
      break;
    case houses_germ[7]:
    case houses_engl[7]:
    case houses_fr[7]:
    case houses_la[7]:
    case houses_it[7]:
      minimum = 8;
      maximum = 21;
      break;
    case houses_germ[8]:
    case houses_engl[8]:
    case houses_fr[8]:
    case houses_la[8]:
    case houses_it[8]:
      minimum = 1;
      maximum = 5;
      break;
    case houses_germ[9]:
    case houses_engl[9]:
    case houses_fr[9]:
    case houses_la[9]:
    case houses_it[9]:
      minimum = 30;
      maximum = 5001;
      break;
    case houses_germ[10]:
    case houses_engl[10]:
    case houses_fr[10]:
    case houses_la[10]:
    case houses_it[10]:
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
        geolocs[geonr].de,
        houses_germ[housenr],
        jobs[jobnr].de,
        areanr
      );
      break;
    case "fr":
    case "fr-FR":
      document.getElementById("fortune").innerHTML = fortune_fr(
        childnr,
        partners_fr[partnr],
        geolocs[geonr].de,
        houses_fr[housenr],
        jobs_fr[jobnr],
        areanr
      );
      break;
    case "la":
      document.getElementById("fortune").innerHTML = fortune_la(
        childnr,
        partners_la[partnr],
        geolocs[geonr].la,
        houses_la[housenr],
        jobs_la[jobnr],
        areanr
      );
      break;
    case "it":
    case "it-IT":
      document.getElementById("fortune").innerHTML = fortune_it(
        childnr,
        partners_it[partnr],
        geolocs[geonr].it,
        houses_it[housenr],
        jobs_it[jobnr],
        areanr
      );
      break;
    default:
      document.getElementById("fortune").innerHTML = fortune_engl(
        childnr,
        partners_engl[partnr],
        geolocs[geonr].en,
        houses_engl[housenr],
        jobs_engl[jobnr],
        areanr
      );
  }
}
function writeText() {
  let lang = getLanguage();
  switch (lang) {
    case "de":
      document.getElementById("title").innerHTML = "🔮Erfahre deine Zukunft🔮";
      document.getElementById("subtitle").innerHTML =
        "Ein lustiges Wahrsagespiel";
      document.getElementById("reload").value = "Neue Weissagung";
      break;
    case "fr":
      document.getElementById("title").innerHTML = "🔮Apprends ton avenir🔮";
      document.getElementById("subtitle").innerHTML =
        "Un jeu prophétique drôle";
      document.getElementById("reload").value = "Nouvelle prophétie";
      break;
    case "la":
      document.getElementById("title").innerHTML = "🔮Res futurae tuae🔮";
      document.getElementById("subtitle").innerHTML = "Ludus divinans hilarus";
      document.getElementById("reload").value = "Oraculum novum";
      break;
    case "it":
      document.getElementById("title").innerHTML = "🔮L'Avvenire tuo🔮";
      document.getElementById("subtitle").innerHTML =
        "Un gioco divinatorio allegro";
      document.getElementById("reload").value = "Prossima divinazione";
      break;
    default:
      document.getElementById("title").innerHTML = "🔮Know your future🔮";
      document.getElementById("subtitle").innerHTML =
        "A funny fortune teller game";
      document.getElementById("reload").value = "New prophecy";
  }
}
